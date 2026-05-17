import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import type { Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import { preciseLessThan } from "./preciseLessThan.ts";
import { precisePrevious } from "./precisePrevious.ts";
import { preciseTruncate } from "./preciseTruncate.ts";

/**
 * Rounds a {@linkcode Precise} to an lower {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseFloor(precise(11n, -1n)); // precise(1n, 0n)
 * preciseFloor(precise(15n, -1n)); // precise(1n, 0n)
 * preciseFloor(precise(19n, -1n)); // precise(1n, 0n)
 * ```
 * @param precise Value to get a lower `Precise` from.
 * @returns Lower `Precise`.
 */
export const preciseFloor: Unary<[precise: Precise], Precise> = memoFunction(
	(precise) => {
		if (isPreciseNaN(precise)) {
			return PRECISE_NAN;
		} else {
			const exponent = getPreciseExponent(precise);

			if (exponent >= 0n) {
				return precise;
			} else {
				const truncated = preciseTruncate(precise);
				const lessThanTruncated = preciseLessThan(truncated);

				return lessThanTruncated(precise) ?
						precisePrevious(truncated)
					:	truncated;
			}
		}
	},
);
