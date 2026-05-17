import { memoFunction } from "@coven/memo";
import type { Filter } from "@coven/types";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import type { Precise } from "./precise.ts";

/**
 * Is the value equal to zero. In {@linkcode Precise} There are 255 possible
 * representations of zero. They are all considered to be equal.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * isPreciseZero(precise(13n, 0n)); // false
 * isPreciseZero(precise(0n, 0n)); // true
 * // ...
 * isPreciseZero(precise(0n, -255n)); // true
 * ```
 */
export const isPreciseZero: Filter<[precise: Precise]> = memoFunction(
	(precise) =>
		!isPreciseNaN(precise) && getPreciseCoefficient(precise) === 0n,
);
