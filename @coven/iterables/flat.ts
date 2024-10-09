import { isIterable } from "@coven/predicates";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Flattens one level of the given iterable.
 *
 * @example
 * ```typescript
 * flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to flatten.
 * @returns Iterable with flatten items.
 */
export const flat = <IterableToFlat extends Iterable<unknown>>(
	iterable: IterableToFlat,
): IterableToFlat extends Iterable<infer Item> ?
	Item extends Iterable<infer SubItem> ?
		IterableIterator<SubItem>
	:	IterableIterator<Item>
:	never =>
	iteratorFunctionToIterableIterator(function* (): Generator {
		for (const iterableOrItem of iterable) {
			isIterable(iterableOrItem) ?
				yield* iterableOrItem
			:	yield iterableOrItem;
		}
	}) as IterableToFlat extends Iterable<infer Item> ?
		Item extends Iterable<infer SubItem> ?
			IterableIterator<SubItem>
		:	IterableIterator<Item>
	:	never;
