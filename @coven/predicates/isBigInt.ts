import { isType } from "./isType.ts";
import type { IsTypeFunction } from "./IsTypeFunction.ts";

/**
 * `typeof` "bigint" alias.
 *
 * @example
 * ```typescript
 * isBigInt(1n); // true
 * isBigInt(1); // false
 * ```
 * @returns `true` if the given value is a `bigint`, `false` otherwise.
 */
export const isBigInt: IsTypeFunction<"bigint"> = isType("bigint");
