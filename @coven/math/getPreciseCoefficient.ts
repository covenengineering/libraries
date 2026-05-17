import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { EXPONENT_SIZE } from "./EXPONENT_SIZE.ts";
import type { Precise } from "./precise.ts";

/**
 * Extract the coefficient from a {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * getPreciseCoefficient(precise(13n, 0n)); // 13n
 * getPreciseCoefficient(precise(42n, -1n)); // 42n
 * ```
 */
export const getPreciseCoefficient: Unary<[precise: Precise], bigint> =
	memoFunction((precise) => precise >> EXPONENT_SIZE);
