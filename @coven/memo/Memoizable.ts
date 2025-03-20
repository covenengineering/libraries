import type { MemoizableRecord } from "./MemoizableRecord.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";

/**
 * Values the `memo` function can memoize.
 *
 * @see {@linkcode MemoizableRecord}
 * @see {@linkcode MemoizableTuple}
 */
export type Memoizable = MemoizableRecord | MemoizableTuple;
