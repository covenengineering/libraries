import { memoFunction } from "@coven/memo";
import { alwaysPreciseNaN } from "./alwaysPreciseNaN.ts";
import { EXPONENT_MIN } from "./EXPONENT_MIN.ts";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import { powerOf10 } from "./powerOf10.ts";
import { precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import { PRECISE_ZERO } from "./PRECISE_ZERO.ts";
import type { PreciseFunction } from "./PreciseFunction.ts";

/**
 * Divides a `Precise` `dividend` by a `Precise` `divisor`.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const half = preciseDivide(precise(2n, 0n));
 *
 * half(precise(1n, 0n)); // precise(5n, -1n)
 * ```
 * @see {@linkcode PreciseFunction}
 * @param divisor `Precise` Divisor.
 * @returns Curried function with `divisor` in context.
 */
export const preciseDivide: PreciseFunction = memoFunction((divisor) => {
	if (isPreciseNaN(divisor)) {
		return alwaysPreciseNaN;
	} else {
		const divisorCoefficient = getPreciseCoefficient(divisor);

		if (divisorCoefficient === 0n) {
			return alwaysPreciseNaN;
		} else {
			const divisorExponent = getPreciseExponent(divisor);

			return memoFunction((dividend) => {
				if (isPreciseNaN(dividend)) {
					return PRECISE_NAN;
				} else {
					const dividendCoefficient = getPreciseCoefficient(dividend);

					if (dividendCoefficient === 0n) {
						return PRECISE_ZERO;
					} else {
						let exponent = 0n;
						let coefficient =
							dividendCoefficient / divisorCoefficient;
						let scaledDividend = dividendCoefficient;

						for (
							;
							-exponent > EXPONENT_MIN
							&& coefficient * divisorCoefficient
								!== scaledDividend;
						) {
							scaledDividend =
								dividendCoefficient * powerOf10(++exponent);
							coefficient = scaledDividend / divisorCoefficient;
						}

						return precise(
							// If we reached the exponent limit, we add one to
							// the coefficient to compensate for the loss in
							// precision
							coefficient + (-exponent > EXPONENT_MIN ? 0n : 1n),
							getPreciseExponent(dividend)
								- exponent
								- divisorExponent,
						);
					}
				}
			});
		}
	}
});
