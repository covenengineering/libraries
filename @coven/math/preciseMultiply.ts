import { memoFunction } from "@coven/memo";
import { alwaysPreciseNaN } from "./alwaysPreciseNaN.ts";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import { precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";

/**
 * Curried multiply operation using the internal `Precise` type.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const double = preciseMultiply(precise(2n, 0n));
 *
 * double(precise(65n, -1n)); // precise(13n, 0n)
 * ```
 * @see {@linkcode PreciseFunction}
 * @param multiplier Multiplier to use in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const preciseMultiply: PreciseFunction = memoFunction((multiplier) => {
	if (isPreciseNaN(multiplier)) {
		return alwaysPreciseNaN;
	} else {
		const multiplierCoefficient = getPreciseCoefficient(multiplier);
		const multiplierExponent = getPreciseExponent(multiplier);

		return memoFunction((multiplicand) =>
			isPreciseNaN(multiplicand) ? PRECISE_NAN : (
				precise(
					getPreciseCoefficient(multiplicand) * multiplierCoefficient,
					getPreciseExponent(multiplicand) + multiplierExponent,
				)
			),
		);
	}
});
