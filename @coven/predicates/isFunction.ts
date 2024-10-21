import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof value === "function"` check.
 *
 * @example
 * ```typescript
 * isFunction(() => {}); // true
 * isFunction(function() {}); // true
 * isFunction(function *() {}); // true
 * isFunction(class {}); // true
 * isFunction(null); // false
 * ```
 * @returns `true` if the given value is a function, `false` otherwise.
 */
export const isFunction: IsTypeFunction<"function"> = isType("function");
