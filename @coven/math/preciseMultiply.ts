import { isBigInt } from "@coven/predicates";
import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./Precise.ts";
import { createPrecise } from "./createPrecise.ts";

/**
 * Curried multiply operation using the internal {@linkcode Precise} type.
 *
 * @example
 * ```typescript
 * const double = preciseMultiply(2n);
 *
 * double(65n, -1n); // [13n]
 * ```
 * @see {@linkcode createPrecise}
 * @see {@linkcode Precise}
 * @param multiplierBase Multiplier base to use in the multiplication.
 * @param multiplierExponent Multiplier exponent to use in the multiplication.
 * @returns Curried function with `multiplierBase` and `multiplierExponent` in context.
 */
export const preciseMultiply = (
	multiplierBase: MaybeInfinity,
	multiplierExponent = 0n,
): (
	multiplicandBase: MaybeInfinity,
	multiplicandExponent?: bigint,
) => Precise =>
(multiplicandBase, multiplicandExponent = 0n) =>
	isBigInt(multiplicandBase) && isBigInt(multiplierBase)
		? createPrecise(
			multiplicandBase * multiplierBase,
			multiplicandExponent + multiplierExponent,
		)
		: createPrecise(Infinity);
