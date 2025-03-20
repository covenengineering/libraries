import { isIterable } from "@coven/predicates";
import type { AwaitableIterable } from "@coven/types";

/**
 * Get a `Symbol.iterator` from an iterable or a `Symbol.asyncIterator` from an
 * asynchronous iterable.
 *
 * @example
 * ```typescript
 * const iterator = getIterator([1, 2, 3]);
 * iterator.next(); // { value: 1, done: false }
 * iterator.next(); // { value: 2, done: false }
 * iterator.next(); // { value: 3, done: false }
 * iterator.next(); // { value: undefined, done: true }
 * ```
 * @param iterable Iterable to get the iterator from.
 * @returns Iterator instance.
 */
export const getIterator = <Iterable extends AwaitableIterable>(
	iterable: Iterable,
): Iterable extends AwaitableIterable<infer Item> ?
	Iterable extends AsyncIterable<Item> ?
		AsyncIterator<Item>
	:	Iterator<Item>
:	never =>
	(iterable as AsyncIterable<unknown>)[
		(isIterable(iterable) ?
			Symbol.iterator
		:	Symbol.asyncIterator) as keyof AsyncIterable<unknown>
	]() as Iterable extends AwaitableIterable<infer Item> ?
		Iterable extends AsyncIterable<Item> ?
			AsyncIterator<Item>
		:	Iterator<Item>
	:	never;
