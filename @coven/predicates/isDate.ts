import { isInstanceOf } from "./isInstanceOf.ts";
import type { IsInstanceOfFunction } from "./IsInstanceOfFunction.ts";

/**
 * `value instanceof Date` check.
 *
 * @example
 * ```typescript
 * isDate(new Date()); // true
 * isDate("1989-10-13"); // false
 * ```
 * @returns `true` if the given value is a `Date`, `false` otherwise.
 */
export const isDate: IsInstanceOfFunction<DateConstructor> = isInstanceOf(Date);
