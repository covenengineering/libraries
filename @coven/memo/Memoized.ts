import type { Branded } from "@coven/types";
import type { Memoizable } from "./Memoizable.ts";

/**
 * Branded read-only structure returned by `memo`.
 *
 * @see {@linkcode Branded}
 * @see {@linkcode Memoizable}
 */
export type Memoized<Value extends Memoizable> = Branded<"Memoized", Value>;
