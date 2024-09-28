import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof` "number" alias.
 *
 * @example
 * ```typescript
 * isNumber(1); // true
 * isNumber(Infinity); // true
 * isNumber(NaN); // true
 * isNumber(1n); // false
 * ```
 * @returns `true` if the given value is a `number`, `false` otherwise.
 */
export const isNumber: IsTypeFunction<"number"> = isType("number");
