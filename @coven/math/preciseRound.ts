import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import { precise, type Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";

/**
 * Rounds given {@linkcode Precise} to nearest integer (ties go away from zero).
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseRound(precise(13n, -1n)); // precise(1n, 0n)
 * preciseRound(precise(4269n, -2n)); // precise(43n, 0n)
 * ```
 * @param precise Value to round.
 * @returns Rounded `Precise`.
 */
export const preciseRound: Unary<[precise: Precise], Precise> = memoFunction(
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
					const rem = coefficient % 10n;
					coefficient /= 10n;
					exponent += 1n;

					if (rem >= 5n || rem <= -5n) {
						coefficient += coefficient >= 0n ? 1n : -1n;
					}
				}

				return precise(coefficient, exponent);
			}
		}
	},
);
