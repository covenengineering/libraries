import type { Maybe, Multary } from "@coven/types";
import type { PreciseToTypeFunction } from "./PreciseToTypeFunction.ts";
import type { Precise } from "./PreciseTuple.ts";

/**
 * Type to represent the curried functions for operations with
 * {@linkcode Precise} values.
 */
export type PreciseFunction<Output extends Precise | Maybe<Precise> = Precise> =
	Multary<Precise, PreciseToTypeFunction<Output>>;
