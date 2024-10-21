import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof value === "undefined"` check.
 *
 * @example
 * ```typescript
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 * ```
 * @param input Value to check.
 * @returns Returns `true` if value is `undefined`, `false` otherwise.
 */
export const isUndefined: IsTypeFunction<"undefined"> = isType("undefined");
