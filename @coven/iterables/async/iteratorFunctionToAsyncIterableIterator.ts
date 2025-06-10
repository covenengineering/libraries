import type { AwaitableIterator, Nullary } from "@coven/types";

/**
 * Takes a generator function and returns an iterable iterator or asynchronous
 * iterable iterator object.
 *
 * @example
 * ```typescript
 * const magicGenerator = function* () { yield "✨"; };
 * const magicIterableIterator = iteratorFunctionToAsyncIterableIterator(magicGenerator);
 *
 * for await (const value of magicIterableIterator) {
 * 	console.log(value); // "✨"
 * }
 *
 * // Same AsyncIterableIterator as above, return values again:
 *
 * for await (const value of magicIterableIterator) {
 * 	console.log(value); // "✨"
 * }
 * ```
 * @param iteratorFunction Generator to be used every time `Symbol.iterator` or `Symbol.asyncIterator` is called.
 * @returns Iterable iterator object.
 */
export const iteratorFunctionToAsyncIterableIterator = <Item>(
	iteratorFunction: Nullary<AwaitableIterator<Item>>,
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
