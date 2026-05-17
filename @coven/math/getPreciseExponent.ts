import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { EXPONENT_COUNT } from "./EXPONENT_COUNT.ts";
import { EXPONENT_MASK } from "./EXPONENT_MASK.ts";
import type { Precise } from "./precise.ts";

/**
 * Extract the exponent from a {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * getPreciseExponent(precise(13n, 0n)); // 0n
 * getPreciseExponent(precise(42n, -1n)); // -1n
 */
export const getPreciseExponent: Unary<[precise: Precise], bigint> =
	memoFunction((precise) => {
		const exponent = precise & EXPONENT_MASK;

		return exponent === 0n ? exponent : exponent - EXPONENT_COUNT;
	});
