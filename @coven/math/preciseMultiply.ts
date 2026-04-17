import { memoFunction } from "@coven/memo";
import { precise } from "./precise.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";

/**
 * Curried multiply operation using the internal `Precise` type.
 *
 * @example
 * ```typescript
 * const double = preciseMultiply(2n, 0n);
 *
 * double(65n, -1n); // [13n, 0n]
 * ```
 * @see {@linkcode precise}
 * @see {@linkcode PreciseFunction}
 * @param multiplierBase Multiplier base to use in the multiplication.
 * @param multiplierExponent Multiplier exponent to use in the multiplication.
 * @returns Curried function with `multiplierBase` and `multiplierExponent` in context.
 */
export const preciseMultiply: PreciseFunction = memoFunction(
	(multiplierBase, multiplierExponent) =>
		memoFunction((multiplicandBase, multiplicandExponent) =>
			precise(
				multiplicandBase * multiplierBase,
				multiplicandExponent + multiplierExponent,
			),
		),
);
