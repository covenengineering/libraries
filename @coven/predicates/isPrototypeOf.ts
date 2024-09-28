import type { IsPrototypeOfFunction } from "./IsPrototypeOfFunction.ts";
import { hasPrototype } from "./hasPrototype.ts";

/**
 * Checks if given `input`'s prototype comes directly from given `constructor`.
 *
 * @example
 * ```typescript
 * const isPrototypeOfObject = isPrototypeOf(Object);
 * isPrototypeOfObject({}); // true
 * isPrototypeOfObject(/./); // false
 * ```
 * @param constructor Constructor to check.
 * @returns Returns a curried function with `constructor` in context.
 */
export const isPrototypeOf = <Expected extends object>(
	constructor: Expected,
): IsPrototypeOfFunction<Expected> =>
(object): object is Expected =>
	hasPrototype(constructor) &&
	constructor.prototype === Object.getPrototypeOf(object);
