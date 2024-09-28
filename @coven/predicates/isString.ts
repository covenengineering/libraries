import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof` "string" alias.
 *
 * @example
 * ```typescript
 * isString("Lou"); // true
 * isString(`Lou`); // true
 * isString(Symbol("Lou")); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is a `string`, `false` otherwise.
 */
export const isString: IsTypeFunction<"string"> = isType("string");
