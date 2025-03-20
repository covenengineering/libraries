/**
 * Takes a generator function and returns an iterable iterator or asynchronous
 * iterable iterator object.
 *
 * @example
 * ```typescript
 * const witchGenerator = function* () { yield "🧙🏻‍♀️"; };
 * const witchIterableIterator = iteratorFunctionToAsyncIterableIterator(witchGenerator);
 *
 * for await (const value of witchIterableIterator) {
 * 	console.log(value); // "🧙🏻‍♀️"
 * }
 *
 * // Same AsyncIterableIterator as above, return values again:
 *
 * for await (const value of witchIterableIterator) {
 * 	console.log(value); // "🧙🏻‍♀️"
 * }
 * ```
 * @param iteratorFunction Generator to be used every time `Symbol.iterator` or `Symbol.asyncIterator` is called.
 * @returns Iterable iterator object.
 */
export const iteratorFunctionToAsyncIterableIterator = <Item>(
	iteratorFunction: (() => Iterator<Item>) | (() => AsyncIterator<Item>),
): AsyncIterableIterator<Item> => {
	const iterator = iteratorFunction();

	return {
		next: async (...next) => await iterator.next(...next),
		...(iterator.return ?
			{ return: async value => await iterator.return?.(value) }
		:	undefined),
		...(iterator.throw ?
			{ throw: async error => await iterator.throw?.(error) }
		:	undefined),
		[Symbol.asyncIterator]: () =>
			iteratorFunctionToAsyncIterableIterator(iteratorFunction),
	} as AsyncIterableIterator<Item>;
};
