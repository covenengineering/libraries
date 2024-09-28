import { hasIteratorSymbol } from "./hasIteratorSymbol.ts";
import { isFunction } from "./isFunction.ts";
import { isObject } from "./isObject.ts";
import { isString } from "./isString.ts";

/**
 * Check if given value is `Iterable`.
 *
 * @example
 * ```typescript
 * isIterable([]); // true
 * isIterable({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` when is an `Iterable`, `false` otherwise.
 */
export const isIterable = <Item>(
	input: unknown,
): input is Readonly<Iterable<Item>> =>
	isString(input) ||
	(isObject(input) &&
		hasIteratorSymbol(input) &&
		isFunction(input[Symbol.iterator]));
