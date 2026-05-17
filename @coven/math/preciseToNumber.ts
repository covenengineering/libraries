import { memoFunction } from "@coven/memo";
import { isPreciseNaN } from "./isPreciseNaN.ts";
import type { Precise } from "./precise.ts";
import { preciseToString } from "./preciseToString.ts";

/**
 * Convert a {@linkcode Precise} to a `number`.
 */
export const preciseToNumber: (precise: Precise) => number = memoFunction(
	(precise) =>
		isPreciseNaN(precise) ? NaN : parseFloat(preciseToString(precise)),
);
