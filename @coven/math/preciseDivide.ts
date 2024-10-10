import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./Precise.ts";
import { numberToPrecise } from "./numberToPrecise.ts";
import { preciseMultiply } from "./preciseMultiply.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried divide operation using the internal {@link Precise} type.
 *
 * @example
 * ```typescript
 * const half = preciseDivide(2n);
 *
 * half(1n); // [5n, -1n]
 * ```
 * @see {@link numberToPrecise}
 * @see {@link Precise}
 * @see {@link preciseMultiply}
 * @see {@link preciseToNumber}
 * @param divisorBase Divisor base to use in the division.
 * @param divisorExponent Divisor exponent to use in the division.
 * @returns Curried function with `divisorBase` and `divisorExponent` in context.
 */
export const preciseDivide = (
	divisorBase: MaybeInfinity,
	divisorExponent = 0n,
): ((dividendBase: MaybeInfinity, dividendExponent?: bigint) => Precise) =>
	divisorBase === 0n ?
		() => [Infinity]
	:	preciseMultiply(
			...numberToPrecise(
				preciseToNumber(1n, -divisorExponent) /
					preciseToNumber(divisorBase, 0n),
			),
		);
