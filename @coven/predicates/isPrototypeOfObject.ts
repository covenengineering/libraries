import { isPrototypeOf } from "./isPrototypeOf.ts";
import type { IsPrototypeOfFunction } from "./IsPrototypeOfFunction.ts";

/**
 * Given `input`'s prototype comes directly from Object.
 *
 * @example
 * ```typescript
 * isPrototypeOfObject({}); // true
 * isPrototypeOfObject(/./); // false
 * ```
 * @returns `true` if the given value is an object inheriting directly from `Object`, `false` otherwise.
 */
// deno-lint-ignore ban-types
export const isPrototypeOfObject: IsPrototypeOfFunction<Object> =
	isPrototypeOf(Object);
