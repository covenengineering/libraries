import { isInstanceOf } from "./isInstanceOf.ts";
import type { IsInstanceOfFunction } from "./IsInstanceOfFunction.ts";

/**
 * `instanceof Date` alias.
 *
 * @example
 * ```typescript
 * isBigInt(1n); // true
 * isBigInt(1); // false
 * ```
 * @returns `true` if the given value is a `Date`, `false` otherwise.
 */
export const isDate: IsInstanceOfFunction<DateConstructor> = isInstanceOf(Date);
