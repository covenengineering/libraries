import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./Precise.ts";
import { bigIntMin } from "./bigIntMin.ts";
import { createPrecise } from "./createPrecise.ts";
import { preciseToNumber } from "./preciseToNumber.ts";

/**
 * Curried add operation using the internal {@link Precise} type.
 *
 * @example
 * ```typescript
 * const addDot2 = preciseAdd(2n);
 *
 * addDot2(1n, -1n); // [3n, -1n]
 * ```
 * @see {@link bigIntMin}
 * @see {@link createPrecise}
 * @see {@link Precise}
 * @see {@link preciseToNumber}
 * @param augendBase Augend base to use in the right side of the addition.
 * @param augendExponent Augend exponent to use in the right side of the addition.
 * @returns Curried function with `augendBase` and `augendExponent` in context.
 */
export const preciseAdd =
	(
		augendBase: MaybeInfinity,
		augendExponent = 0n,
	): ((addendBase: MaybeInfinity, addendExponent?: bigint) => Precise) =>
	(addendBase, addendExponent = 0n) => {
		const commonExponent = bigIntMin(addendExponent, augendExponent);

		return createPrecise(
			BigInt(
				preciseToNumber(addendBase, addendExponent - commonExponent) +
					preciseToNumber(
						augendBase,
						augendExponent - commonExponent,
					),
			),
			commonExponent,
		);
	};
