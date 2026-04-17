import type { Multary } from "@coven/types";
import type { Precise } from "./PreciseTuple.ts";

export type PreciseToTypeFunction<Output> = Multary<Precise, Output>;
