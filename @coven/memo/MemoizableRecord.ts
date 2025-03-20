import type { MemoizableKey } from "./MemoizableKey.ts";
import type { MemoizedItem } from "./MemoizedItem.ts";

/**
 * Record the `memo` function can memoize.
 *
 * @see {@linkcode MemoizableKey}
 * @see {@linkcode MemoizedItem}
 */
export type MemoizableRecord = { readonly [key: MemoizableKey]: MemoizedItem };
