import { memoFunction } from "@coven/memo";
import type { Unary } from "@coven/types";
import { getPreciseCoefficient } from "./getPreciseCoefficient.ts";
import { getPreciseExponent } from "./getPreciseExponent.ts";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import { precise, type Precise } from "./precise.ts";
import { PRECISE_NAN } from "./PRECISE_NAN.ts";

/**
 * Takes a {@linkcode Precise} and returns the negated value.
 *
 * @example
 * ```typescript
 * import { precise } from "@coven/math";
 *
 * preciseNegate(precise(13n, 0n)); // precise(-13n, 0n)
 * ```
 * @param value Value to negate.
 * @returns Negated value.
 */
export const preciseNegate: Unary<[value: Precise], Precise> = memoFunction(
	(value) =>
		isPreciseNaN(value) ? PRECISE_NAN : (
			precise(-getPreciseCoefficient(value), getPreciseExponent(value))
		),
);
