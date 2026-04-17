import type { Multary } from "@coven/types";
import type { Precise } from "./precise.ts";

/**
 * Type used by functions that turn a {@linkcode Precise} into a different type.
 */
export type PreciseToTypeFunction<Output> = Multary<Precise, Output>;
