import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import type { Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import { preciseGreaterThan } from "./preciseGreaterThan.ts";
import { preciseNext } from "./preciseNext.ts";
import { preciseTruncate } from "./preciseTruncate.ts";

/**
 * Rounds a {@linkcode Precise} to an greater {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseCeiling(precise(11n, -1n)); // precise(2n, 0n)
 * preciseCeiling(precise(15n, -1n)); // precise(2n, 0n)
 * preciseCeiling(precise(19n, -1n)); // precise(2n, 0n)
 * ```
 * @param precise Value to get a greater `Precise` from.
 * @returns Greater `Precise`.
 */
export const preciseCeiling: Unary<[precise: Precise], Precise> = memoFunction(
	(precise) => {
		if (isPreciseNaN(precise)) {
			return PRECISE_NAN;
		} else {
			const exponent = getPreciseExponent(precise);

			if (exponent >= 0n) {
				return precise;
			} else {
				const truncated = preciseTruncate(precise);
				const greaterThanTruncated = preciseGreaterThan(truncated);

				return greaterThanTruncated(precise) ?
						preciseNext(truncated)
					:	truncated;
			}
		}
	},
);
