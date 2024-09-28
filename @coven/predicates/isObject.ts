import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof` "object" alias.
 *
 * @example
 * ```typescript
 * isObject({}); // true
 * isObject([]); // true
 * isObject(new Date()); // true
 * isObject(null); // false
 * ```
 * @returns `true` if the given value is an `object`, `false` otherwise.
 */
export const isObject: IsTypeFunction<"object"> = isType("object");
