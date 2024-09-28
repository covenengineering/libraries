import { has } from "./has.ts";
import type { HasFunction } from "./HasFunction.ts";

/**
 * Check if given object has the `Symbol.asyncIterator` symbol.
 *
 * @example
 * ```typescript
 * hasAsyncIteratorSymbol({ [Symbol.asyncIterator]() {} }); // true
 * hasAsyncIteratorSymbol({ bar: "bar" }); // false
 * ```
 * @returns `true` when given object has the `Symbol.asyncIterator` symbol,
 * `false` otherwise.
 */
export const hasAsyncIteratorSymbol: HasFunction<typeof Symbol.asyncIterator> =
	has(Symbol.asyncIterator);
