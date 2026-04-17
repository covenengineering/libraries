import { memoFunction } from "@coven/memo";
import { isUndefined } from "@coven/predicates";
import type { Unary } from "@coven/types";
import { always } from "@coven/utils";
import { numberToPrecise } from "./numberToPrecise.ts";
import { preciseSubtract } from "./preciseSubtract.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried subtract operation using {@linkcode pipe} with {@linkcode preciseSubtract}.
 *
 * @example
 * ```typescript
 * const previous = subtract(1);
 *
 * previous(14); // 13
 * ```
 * @see {@linkcode preciseSubtract}
 * @see {@linkcode pipe}
 * @param subtrahend Subtrahend value to be used in the subtraction.
 * @returns Curried function with `subtrahend` in context.
 */
export const subtract: Unary<
	[subtrahend: number],
	Unary<[minuend: number], number>
> = memoFunction((subtrahend) => {
	const preciseSubtrahend = numberToPrecise(subtrahend);
	const preciseAddAugend =
		isUndefined(preciseSubtrahend) ? undefined : (
			preciseSubtract(...preciseSubtrahend)
		);

	return isUndefined(preciseSubtrahend) ?
			always(subtrahend)
		:	memoFunction((minuend) => {
				const preciseMinuend = numberToPrecise(minuend);

				return (
						isUndefined(preciseMinuend)
							|| isUndefined(preciseAddAugend)
					) ?
						minuend
					:	preciseToNumber(...preciseAddAugend(...preciseMinuend));
			});
});
