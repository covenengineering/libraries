import { memo } from "@coven/memo";

/**
 * Like `Math.min` but for `bigint` values.
 *
 * @example
 * ```typescript
 * bigIntMin(5n, 1n, 10n); // 1n
 * ```
 * @see {@linkcode https://coven.to/mdn/Math/min Math.min}
 *
 * @param bigInts Array of `bigint` values to compare.
 * @returns Minimum value of the `bigint` array.
 */
export const bigIntMin: (...bigints: ReadonlyArray<bigint>) => bigint = memo(
	(...bigints) =>
		bigints.reduce((min, bigint) => (bigint < min ? bigint : min)),
);
