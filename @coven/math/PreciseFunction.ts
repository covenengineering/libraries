import type { Maybe, Multary } from "@coven/types";
import type { PreciseToTypeFunction } from "./PreciseToTypeFunction.ts";
import type { Precise } from "./PreciseTuple.ts";

export type PreciseFunction<Output extends Precise | Maybe<Precise> = Precise> =
	Multary<Precise, PreciseToTypeFunction<Output>>;
