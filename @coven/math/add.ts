import { memoFunction } from "@coven/memo";
import { isUndefined } from "@coven/predicates";
import type { Unary } from "@coven/types";
import { always } from "@coven/utils";
import { numberToPrecise } from "./numberToPrecise.ts";
import { preciseAdd } from "./preciseAdd.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried add operation using {@linkcode preciseAdd}.
 *
 * @example
 * ```typescript
 * const addDot2 = add(0.2);
 *
 * addDot2(0.1); // 0.3
 * ```
 * @see {@linkcode preciseAdd}
 *
 * @param augend Augend value to be on the right side.
 * @returns Curried function with `augend` in context.
 */
export const add: Unary<
	[augend: number],
	Unary<[addend: number], number>
> = memoFunction((augend) => {
	const preciseAugend = numberToPrecise(augend);
	const preciseAddAugend =
		isUndefined(preciseAugend) ? undefined : preciseAdd(...preciseAugend);

	return isUndefined(preciseAugend) ?
			always(augend)
		:	memoFunction((addend) => {
				const preciseAddend = numberToPrecise(addend);

				return (
						isUndefined(preciseAddend)
							|| isUndefined(preciseAddAugend)
					) ?
						addend
					:	preciseToNumber(...preciseAddAugend(...preciseAddend));
			});
});
