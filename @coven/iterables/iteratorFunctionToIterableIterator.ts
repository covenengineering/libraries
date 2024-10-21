/**
 * Takes a generator function and returns an iterable iterator object.
 *
 * @example
 * ```typescript
 * const witchGenerator = function* () { yield "🧙🏻‍♀️"; };
 * const witchIterableIterator = iteratorFunctionToIterableIterator(witchGenerator);
 *
 * for (const value of witchIterableIterator) {
 * 	console.log(value); // "foo"
 * }
 *
 * // Same IterableIterator as above, return values again:
 *
 * for (const value of witchIterableIterator) {
 * 	console.log(value); // "foo"
 * }
 * ```
 * @param iteratorFunction Generator to be used every time `Symbol.iterator` is called.
 * @returns Iterable iterator object.
 */
export const iteratorFunctionToIterableIterator = <Item>(
	iteratorFunction: () => Iterator<Item>,
): IterableIterator<Item> => {
	const iterator = iteratorFunction();

	return {
		next: iterator.next.bind(iterator),
		...(iterator.return
			? { return: iterator.return.bind(iterator) }
			: undefined),
		...(iterator.throw
			? { throw: iterator.throw.bind(iterator) }
			: undefined),
		[Symbol.iterator]: () =>
			iteratorFunctionToIterableIterator(iteratorFunction),
	} as IterableIterator<Item>;
};
