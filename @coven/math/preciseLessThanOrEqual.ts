import { memoFunction } from "@coven/memo";
import type { PreciseComparison } from "./PreciseComparison.ts";
import { preciseEqual } from "./preciseEqual.ts";
import { preciseLessThan } from "./preciseLessThan.ts";

/**
 * Compares 2 `Precise` values and returns `true` when `left` is less than or
 * equal to `right`, `false` otherwise.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const lessThanOrEqualTo13 = preciseLessThanOrEqual(precise(13n, 0n));
 *
 * lessThanOrEqualTo13(precise(42n, 0n)); // false
 * lessThanOrEqualTo13(precise(13n, -1n)); // true
 * lessThanOrEqualTo13(precise(13n, 0n)); // true
 * ```
 * @see {@linkcode preciseCompare}
 * @param right Right value to compare against.
 * @returns Curried function with `right` in context.
 */
export const preciseLessThanOrEqual: PreciseComparison = memoFunction(
	(right) => {
		const isLessThanRight = preciseLessThan(right);
		const isEqualToRight = preciseEqual(right);

		return (left) => isLessThanRight(left) || isEqualToRight(left);
	},
);
