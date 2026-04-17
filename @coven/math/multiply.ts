import { memoFunction } from "@coven/memo";
import { isUndefined } from "@coven/predicates";
import type { Unary } from "@coven/types";
import { always } from "@coven/utils";
import { numberToPrecise } from "./numberToPrecise.ts";
import { preciseMultiply } from "./preciseMultiply.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried multiply operation using {@linkcode preciseMultiply}.
 *
 * @example
 * ```typescript
 * const double = multiply(2);
 *
 * double(6.5); // 13
 * ```
 * @see {@linkcode preciseMultiply}
 * @see {@linkcode pipe}
 * @param multiplier Multiplier value to be used in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const multiply: Unary<
	[multiplier: number],
	Unary<[addend: number], number>
> = memoFunction((multiplier) => {
	const preciseMultiplier = numberToPrecise(multiplier);
	const preciseAddAugend =
		isUndefined(preciseMultiplier) ? undefined : (
			preciseMultiply(...preciseMultiplier)
		);

	return isUndefined(preciseMultiplier) ?
			always(multiplier)
		:	memoFunction((multiplicand) => {
				const preciseMultiplicand = numberToPrecise(multiplicand);

				return (
						isUndefined(preciseMultiplicand)
							|| isUndefined(preciseAddAugend)
					) ?
						multiplicand
					:	preciseToNumber(
							...preciseAddAugend(...preciseMultiplicand),
						);
			});
});
