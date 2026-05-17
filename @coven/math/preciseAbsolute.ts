import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import type { Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";
import { preciseNegate } from "./preciseNegate.ts";

/**
 * Get absolute value of the given {@linkcode Precise}.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseAbsolute(precise(13n, 0n)); // precise(13n, 0n)
 * preciseAbsolute(precise(-13n, 0n)); // precise(13n, 0n)
 * ````
 * @param precise Value to get the absolute from.
 * @returns Absolute of `value`.
 */
export const preciseAbsolute: Unary<[precise: Precise], Precise> = memoFunction(
	(precise) =>
		isPreciseNaN(precise) ? PRECISE_NAN
		: getPreciseCoefficient(precise) < 0n ? preciseNegate(precise)
		: precise,
);
