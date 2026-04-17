import type { Multary } from "@coven/types";
import type { PreciseToTypeFunction } from "./PreciseToTypeFunction.ts";
import type { Precise } from "./precise.ts";

/**
 * Type to represent the curried functions for operations with
 * {@linkcode Precise} values.
 */
export type PreciseFunction<Output extends Precise | number = Precise> =
	Multary<Precise, PreciseToTypeFunction<Output>>;
