import type { AwaitableIterable } from "./AwaitableIterable.ts";

/**
 * Type of the items of an {@link AwaitableIterable}.
 *
 * @example
 * ```typescript
 * const iterable = [13, 42, 665] as const satisfies AwaitableIterable<number>;
 * const item = 13 as const satisfies IterableItem<typeof iterable>;
 * ```
 * @see {@link AwaitableIterable}
 * @template Iterable `AwaitableIterable` type to get the item type from.
 */
export type IterableItem<Iterable extends AwaitableIterable> = Iterable extends
	AwaitableIterable<infer Item> ? Item : never;
