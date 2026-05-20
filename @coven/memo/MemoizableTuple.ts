import type { Memoizable } from "./Memoizable.ts";

/**
 * Arrays that can be memoized.
 *
 * @see {@linkcode Memoizable}
 */
// deno-lint-ignore coven/no-array-type
export type MemoizableTuple = readonly Memoizable[];
