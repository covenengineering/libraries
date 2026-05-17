import { memoFunction } from "@coven/memo";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import { PRECISE_ZERO } from "./PRECISE_ZERO.ts";
import { preciseCompare } from "./preciseCompare.ts";
import type { PreciseComparison } from "./PreciseComparison.ts";

/**
 * Compares 2 `Precise` values and returns `true` when they are equal or `false`
 * when they aren't, using {@linkcode preciseCompare}.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const isBadLuck = preciseEqual(precise(13n, 0n));
 *
 * isBadLuck(precise(42n, 0n)); // false
 * isBadLuck(precise(13n, -1n)); // false
 * isBadLuck(precise(13n, 0n)); // true
 * ```
 */
export const preciseEqual: PreciseComparison = memoFunction((right) => {
	const compareWithRight = preciseCompare(right);

	return memoFunction((left) => {
		const comparison = compareWithRight(left);

		return !isPreciseNaN(comparison) && comparison === PRECISE_ZERO;
	});
});
