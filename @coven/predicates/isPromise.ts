import { isInstanceOf } from "./isInstanceOf.ts";
import type { IsInstanceOfFunction } from "./IsInstanceOfFunction.ts";

/**
 * `instanceof Promise` alias.
 *
 * @example
 * ```typescript
 * isPromise(new Promise()); // true
 * isPromise((async () => {})()); // true
 * isPromise(fetch("https://coven.engineering")); // true
 * isPromise(Promise.resolve("Coven")); // true
 * isPromise("Coven"); // false
 * ```
 * @returns `true` if the given value is an instance of `Promise`, `false` otherwise.
 */
export const isPromise: IsInstanceOfFunction<PromiseConstructor> = isInstanceOf(
	Promise,
);
