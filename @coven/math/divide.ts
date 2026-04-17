import { memoFunction } from "@coven/memo";
import { isUndefined } from "@coven/predicates";
import type { Maybe, Unary } from "@coven/types";
import { always } from "@coven/utils";
import { numberToPrecise } from "./numberToPrecise.ts";
import { preciseDivide } from "./preciseDivide.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried divide operation using {@linkcode preciseDivide}.
 *
 * @example
 * ```typescript
 * const half = divide(2);
 *
 * half(1); // 0.5
 * ```
 * @see {@linkcode preciseDivide}
 * @see {@linkcode pipe}
 * @param divisor Divisor to be used in the division.
 * @returns Curried function with `divisor` in context.
 */
export const divide: Unary<
	[augend: number],
	Unary<[addend: number], Maybe<number>>
> = memoFunction((divisor) => {
	const preciseDivisor = numberToPrecise(divisor);
	const preciseDivideDivisor =
		isUndefined(preciseDivisor) ? undefined : (
			preciseDivide(...preciseDivisor)
		);

	return (
		isUndefined(preciseDivisor) ?
			Number.isNaN(divisor) ?
				always(NaN)
			:	(addend) => (Number.isFinite(addend) ? 0 : NaN)
		:	memoFunction((addend) => {
				const preciseAddend = numberToPrecise(addend);
				const preciseResult =
					(
						isUndefined(preciseAddend)
						|| isUndefined(preciseDivideDivisor)
					) ?
						undefined
					:	preciseDivideDivisor(...preciseAddend);

				return isUndefined(preciseResult) ? addend : (
						preciseToNumber(...preciseResult)
					);
			})
	);
});
