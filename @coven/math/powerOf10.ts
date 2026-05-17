import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";

/**
 * Function that returns `10n ** exponent` and caches the result.
 *
 * @example
 * ```typescript
 * powerOf10(0n); // 1n
 * powerOf10(1n); // 10n
 * ````
 * @param exponent Exponent to elevate `10` to.
 * @returns New exponent calculation or cached value.
 */
export const powerOf10: Unary<[exponent: bigint], bigint> = memoFunction(
	(exponent) => 10n ** exponent,
);
