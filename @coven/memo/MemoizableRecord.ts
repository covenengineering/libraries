import type { Memoizable } from "./Memoizable.ts";

/**
 * Record that can be memoized.
 *
 * @see {@linkcode Memoizable}
 */
export type MemoizableRecord = Readonly<{ [key: PropertyKey]: Memoizable }>;
