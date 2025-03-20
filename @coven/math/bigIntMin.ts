import { memo } from "@coven/memo";

/**
 * Like `Math.min` but for `bigint` values.
 *
 * @example
 * ```typescript
 * bigIntMin(5n, 1n, 10n); // 1n
 * ```
 * @see [Math.min](https://mdn.io/Math.min)
 *
 * @param bigInts Array of `bigint` values to compare.
 * @returns Minimum value of the `bigint` array.
 */
export const bigIntMin = memo((...bigints: ReadonlyArray<bigint>): bigint =>
	bigints.reduce((min, bigint) => (bigint < min ? bigint : min)),
);
