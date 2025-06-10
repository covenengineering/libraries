/**
 * Turns given iterable into an array.
 *
 * @example
 * ```typescript
 * iterableToArray([1, 2, 3, 4]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to be turned into an array.
 * @returns Array made of iterable items.
 */
export const iterableToArray = Array.from as <Item>(
	iterable: Iterable<Item>,
) => ReadonlyArray<Item>;
