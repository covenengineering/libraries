import type { AwaitableIterable } from "@coven/types";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Returns a single instance of each item in the iterable or asynchronous
 * iterable.
 *
 * @example
 * ```typescript
 * unique([1, 2, 3, 4, 1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be filtered.
 * @returns Generators with a single instance of each item of the iterable.
 */
export const unique = <Item>(
	iterable: AwaitableIterable<Item>,
): Readonly<AsyncIterableIterator<Item>> =>
	iteratorFunctionToAsyncIterableIterator(
		async function* (): AsyncGenerator<Item> {
			const set = new Set<Item>();

			for await (const item of iterable) {
				set.has(item) ? undefined : (set.add(item), yield item);
			}
		},
	);
