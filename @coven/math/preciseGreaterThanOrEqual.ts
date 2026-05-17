import { memoFunction } from "@coven/memo";
import type { PreciseComparison } from "./PreciseComparison.ts";
import { preciseEqual } from "./preciseEqual.ts";
import { preciseGreaterThan } from "./preciseGreaterThan.ts";

/**
 * Compares 2 `Precise` values and returns `true` when `left` is greater than or
 * equal to `right`, `false` otherwise.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const greaterThanOrEqualTo13 = preciseGreaterThanOrEqual(precise(13n, 0n));
 *
 * greaterThanOrEqualTo13(precise(42n, 0n)); // true
 * greaterThanOrEqualTo13(precise(13n, -1n)); // false
 * greaterThanOrEqualTo13(precise(13n, 0n)); // true
 * ```
 * @see {@linkcode preciseCompare}
 * @param right Right value to compare against.
 * @returns Curried function with `right` in context.
 */
export const preciseGreaterThanOrEqual: PreciseComparison = memoFunction(
	(right) => {
		const isGreaterThanRight = preciseGreaterThan(right);
		const isEqualToRight = preciseEqual(right);

		return memoFunction(
			(left) => isGreaterThanRight(left) || isEqualToRight(left),
		);
	},
);
