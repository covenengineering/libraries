import type { MemoizableRecord } from "./MemoizableRecord.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";

/**
 * Types that can be memoized.
 *
 * @see {@linkcode MemoizableRecord}
 * @see {@linkcode MemoizableTuple}
 */
export type MemoizableObject = MemoizableRecord | MemoizableTuple;
