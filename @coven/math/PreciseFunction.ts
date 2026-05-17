import type { Unary } from "@coven/types";
import type { Precise } from "./precise.ts";

/**
 * Type to represent the curried functions for arithmetic with {@linkcode Precise}
 * values.
 */
export type PreciseFunction = Unary<
	[right: Precise],
	Unary<[left: Precise], Precise>
>;
