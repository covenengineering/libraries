import type { MEMO_ROOT } from "./MEMO_ROOT.ts";
import type { MemoizedItem } from "./MemoizedItem.ts";

/**
 * Union of `MemoCache` possible keys.
 */
export type MemoCacheKeyUnion = MemoizedItem | typeof MEMO_ROOT;
