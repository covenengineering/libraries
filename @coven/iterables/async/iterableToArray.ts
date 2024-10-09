import type { AwaitableIterable, ReadonlyArray } from "@coven/types";

/**
 * Turns given iterable or asynchronous iterable into an array.
 *
 * @example
 * ```typescript
 * iterableToArray([1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be turned into an array.
 * @returns Array made of iterable items.
 */
export const iterableToArray: <Item>(
	iterable: AwaitableIterable<Item>,
) => Promise<ReadonlyArray<Item>> = Array.fromAsync;
