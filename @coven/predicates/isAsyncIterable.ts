import { hasAsyncIteratorSymbol } from "./hasAsyncIteratorSymbol.ts";
import { isFunction } from "./isFunction.ts";
import { isObject } from "./isObject.ts";

/**
 * Check if given value is `AsyncIterable`.
 *
 * **Not to be confused with `isAsynchronousIterable` which checks for both
 * `AsyncIterable` and `Iterable`.**
 *
 * @example
 * ```typescript
 * isAsyncIterable((async function * () { yield* [] })()); // true
 * isAsyncIterable([]); // false
 * isAsyncIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `AsyncIterable`, `false` otherwise.
 */
export const isAsyncIterable = <Item>(
	input: unknown,
): input is AsyncIterable<Item> =>
	isObject(input) &&
	hasAsyncIteratorSymbol(input) &&
	isFunction(input[Symbol.asyncIterator]);
