import { isInstanceOf } from "./isInstanceOf.ts";
import type { IsInstanceOfFunction } from "./IsInstanceOfFunction.ts";

/**
 * `value instanceof Promise` check.
 *
 * @example
 * ```typescript
 * isPromise(new Promise(resolve => resolve(""))); // true
 * isPromise((async () => {})()); // true
 * isPromise(Promise.resolve("Coven")); // true
 * isPromise("Coven"); // false
 * ```
 * @returns `true` if the given value is an instance of `Promise`, `false` otherwise.
 */
export const isPromise: IsInstanceOfFunction<PromiseConstructor> =
	isInstanceOf(Promise);
