import type { AwaitableIterator } from "./AwaitableIterator.ts";

/**
 * Gets the type of the items in an {@linkcode AwaitableIterator}.
 *
 * @example
 * ```typescript
 * import { AwaitableIterator } from "@coven/types";
 *
 * const iterator = [13, 42, 665].values() satisfies AwaitableIterator<number>;
 *
 * type Example = IteratorItem<typeof iterator>; // number
 * ```
 * @see {@linkcode AwaitableIterator}
 * @template Iterator `AwaitableIterator` to get the item type from.
 */
export type IteratorItem<Iterator extends AwaitableIterator> = Iterator extends
	AwaitableIterator<infer Item> ? Item : never;
