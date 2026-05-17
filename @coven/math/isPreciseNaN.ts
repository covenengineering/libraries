import { memoFunction } from "@coven/memo";
import type { Filter } from "@coven/types";
import { EXPONENT_NAN } from "./EXPONENT_NAN.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import type { Precise } from "./precise.ts";

/**
 * Check if given {@linkcode Precise} is a `PRECISE_NAN`.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * isPreciseNaN(precise(13n, 0n)); // false
 * isPreciseNaN(precise(0n, -256n)); // true
 * isPreciseNaN(precise(13n, -256n)); // true
 * ```
 */
export const isPreciseNaN: Filter<[precise: Precise]> = memoFunction(
	(precise) => getPreciseExponent(precise) === EXPONENT_NAN,
);
