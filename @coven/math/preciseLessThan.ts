import { memoFunction } from "@coven/memo";
import { PRECISE_NEGATIVE_ONE } from "./PRECISE_NEGATIVE_ONE.ts";
import { preciseCompare } from "./preciseCompare.ts";
import type { PreciseComparison } from "./PreciseComparison.ts";

/**
 * Compares 2 `Precise` values and returns `true` when `left` is less than
 * `right`, `false` otherwise.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const lessThan13 = preciseLessThan(precise(13n, 0n));
 *
 * lessThan13(precise(42n, 0n)); // false
 * lessThan13(precise(13n, -1n)); // true
 * lessThan13(precise(13n, 0n)); // false
 * ```
 * @see {@linkcode preciseCompare}
 * @param right Right value to compare against.
 * @returns Curried function with `right` in context.
 */
export const preciseLessThan: PreciseComparison = memoFunction((right) => {
	const compareWithRight = preciseCompare(right);

	return memoFunction(
		(left) => compareWithRight(left) === PRECISE_NEGATIVE_ONE,
	);
});
