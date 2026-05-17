import type { Filter, Unary } from "@coven/types";
import type { Precise } from "./precise.ts";

/**
 * Type to represent a {@linkcode Precise} comparison function (`left` compared
 * with `right`).
 */
export type PreciseComparison = Unary<
	[right: Precise],
	Filter<[left: Precise]>
>;
