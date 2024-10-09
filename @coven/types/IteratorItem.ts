import type { AwaitableIterator } from "./AwaitableIterator.ts";

/**
 * Gets the type of the items in an {@link AwaitableIterator}.
 *
 * @example
 * ```typescript
 * const iterator = [13, 42, 665] as const satisfies AwaitableIterator<number>;
 *
 * type Example = IteratorItem<typeof iterator>; // number
 * ```
 * @see {@link AwaitableIterator}
 * @template Iterator AwaitableIterator to get the item type from.
 */
export type IteratorItem<Iterator extends AwaitableIterator> =
	Iterator extends AwaitableIterator<infer Item> ? Item : never;
