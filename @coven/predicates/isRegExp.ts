import { isInstanceOf } from "./isInstanceOf.ts";
import type { IsInstanceOfFunction } from "./IsInstanceOfFunction.ts";

/**
 * `value instanceof RegExp` check.
 *
 * @example
 * ```typescript
 * isRegExp(new RegExp("-")); // true
 * isRegExp(/-/); // true
 * isRegExp("Witch"); // false
 * ```
 * @returns `true` if the given value is an instance of `RegExp`, `false` otherwise.
 */
export const isRegExp: IsInstanceOfFunction<RegExpConstructor> =
	isInstanceOf(RegExp);
