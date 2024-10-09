/**
 * Get a `Symbol.iterator` from an iterable.
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
export const getIterator = <Item = unknown>(
	iterable: Iterable<Item, unknown, undefined>,
	// deno-lint-ignore no-undef
): IteratorObject<Item, undefined, unknown> => Iterator.from(iterable);
