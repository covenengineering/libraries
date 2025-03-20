import type { MEMO_ROOT } from "./MEMO_ROOT.ts";
import type { MemoizedItem } from "./MemoizedItem.ts";

/**
 * Intersection of `MemoCache` possible keys.
 */
export type MemoCacheKeyIntersection = MemoizedItem & typeof MEMO_ROOT;
