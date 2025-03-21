import { memo } from "@coven/memo";
import { isBigInt } from "@coven/predicates";
import type { MaybeInfinity } from "./MaybeInfinity.ts";
import type { Precise } from "./PreciseTuple.ts";
import { precise } from "./precise.ts";

/**
 * Curried multiply operation using the internal {@linkcode Precise} type.
 *
 * @example
 * ```typescript
 * const double = preciseMultiply(2n);
 *
 * double(65n, -1n); // [13n]
 * ```
 * @see {@linkcode precise}
 * @see {@linkcode Precise}
 * @param multiplierBase Multiplier base to use in the multiplication.
 * @param multiplierExponent Multiplier exponent to use in the multiplication.
 * @returns Curried function with `multiplierBase` and `multiplierExponent` in context.
 */
export const preciseMultiply: (
	multiplierBase: MaybeInfinity,
	multiplierExponent?: bigint,
) => (
	multiplicandBase: MaybeInfinity,
	multiplicandExponent?: bigint,
) => Precise = memo((multiplierBase, multiplierExponent) =>
	memo((multiplicandBase, multiplicandExponent) =>
		isBigInt(multiplicandBase) && isBigInt(multiplierBase) ?
			precise(
				multiplicandBase * multiplierBase,
				(multiplicandExponent ?? 0n) + (multiplierExponent ?? 0n),
			)
		:	precise(Infinity),
	),
);
