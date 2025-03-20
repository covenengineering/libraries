import type { Entry } from "@coven/types";
import type { Memoized } from "./Memoized.ts";
import type { MemoizedItem } from "./MemoizedItem.ts";

/**
 * Memoized record entry.
 *
 * @see {@linkcode Memoized}
 * @see {@linkcode MemoizedItem}
 */
export type MemoizedRecordEntry = Memoized<Entry<string, MemoizedItem>>;
