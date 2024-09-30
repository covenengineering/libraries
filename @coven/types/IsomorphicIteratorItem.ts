import type { IsomorphicIterator } from "./IsomorphicIterator.ts";

/**
 * Gets the type of the items in an {@link IsomorphicIterator}.
 *
 * @example
 * ```typescript
 * const iterator = [13, 42, 665] as const satisfies IsomorphicIterator<number>;
 *
 * type Example = IsomorphicIteratorItem<typeof iterator>; // number
 * ```
 * @see {@link IsomorphicIterator}
 * @template Iterator IsomorphicIterable to get the item type from.
 */
export type IsomorphicIteratorItem<Iterator extends IsomorphicIterator> =
	Iterator extends IsomorphicIterator<infer Item> ? Item : never;
