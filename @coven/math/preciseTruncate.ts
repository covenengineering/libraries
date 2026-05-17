import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import { precise, type Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";

/**
 * Truncate given {@linkcode Precise} towards zero.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseTruncate(precise(13n, -1n)); // precise(1n, 0n)
 * preciseTruncate(precise(4269n, -2n)); // precise(42n, 0n)
 * ```
 * @param precise Value to truncate.
 * @returns Truncated `Precise`.
 */
export const preciseTruncate: Unary<[precise: Precise], Precise> = memoFunction(
	(value) => {
		if (isPreciseNaN(value)) {
			return PRECISE_NAN;
		} else {
			let exponent = getPreciseExponent(value);

			if (exponent >= 0n) {
				return value;
			} else {
				let coefficient = getPreciseCoefficient(value);

				for (; exponent < 0n; ) {
					coefficient /= 10n;
					exponent += 1n;
				}

				return precise(coefficient, 0n);
			}
		}
	},
);
