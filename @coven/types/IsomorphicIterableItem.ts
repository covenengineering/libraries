import type { IsomorphicIterable } from "./IsomorphicIterable.ts";

/**
 * Type of the items of an {@link IsomorphicIterable}.
 *
 * @example
 * ```typescript
 * const iterable = [13, 42, 665] as const satisfies IsomorphicIterable<number>;
 * const item = 13 as const satisfies IsomorphicIterableItem<typeof iterable>;
 * ```
 * @see {@link IsomorphicIterable}
 * @template Iterable `IsomorphicIterable` type to get the item type from.
 */
export type IsomorphicIterableItem<Iterable extends IsomorphicIterable> =
	Iterable extends IsomorphicIterable<infer Item> ? Item : never;
