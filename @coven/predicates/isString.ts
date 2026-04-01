import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof value === "string"` check.
 *
 * @example
 * ```typescript
 * isString("Witch"); // true
 * isString(`Witch`); // true
 * isString(Symbol("Witch")); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is a `string`, `false` otherwise.
 */
export const isString: IsTypeFunction<"string"> = isType("string");
