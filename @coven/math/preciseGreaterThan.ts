import { memoFunction } from "@coven/memo";
import { PRECISE_ONE } from "./PRECISE_ONE.ts";
import { preciseCompare } from "./preciseCompare.ts";
import type { PreciseComparison } from "./PreciseComparison.ts";

/**
 * Compares 2 `Precise` values and returns `true` when `left` is greater than
 * `right`, `false` otherwise.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * const greaterThan13 = preciseGreaterThan(precise(13n, 0n));
 *
 * greaterThan13(precise(42n, 0n)); // true
 * greaterThan13(precise(13n, -1n)); // false
 * greaterThan13(precise(13n, 0n)); // false
 * ```
 * @see {@linkcode preciseCompare}
 * @param right Right value to compare against.
 * @returns Curried function with `right` in context.
 */
export const preciseGreaterThan: PreciseComparison = memoFunction((right) => {
	const compareWithRight = preciseCompare(right);

	return memoFunction((left) => compareWithRight(left) === PRECISE_ONE);
});
