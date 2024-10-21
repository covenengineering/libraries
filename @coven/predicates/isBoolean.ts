import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof value === "boolean"` check.
 *
 * @example
 * ```typescript
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean(null); // false
 * ```
 * @returns `true` if the given value is a `boolean`, `false` otherwise.
 */
export const isBoolean: IsTypeFunction<"boolean"> = isType("boolean");
