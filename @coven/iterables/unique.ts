import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Returns a single instance of each item in the iterable.
 *
 * @example
 * ```typescript
 * unique([1, 2, 3, 4, 1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be filtered.
 * @returns Generators with a single instance of each item of the iterable.
 */
export const unique = <Item>(
	iterable: Iterable<Item>,
): IterableIterator<Item> =>
	iteratorFunctionToIterableIterator(function* (): Generator<Item> {
		const set = new Set<Item>();

		for (const item of iterable) {
			set.has(item) ? undefined : (set.add(item), yield item);
		}
	});
