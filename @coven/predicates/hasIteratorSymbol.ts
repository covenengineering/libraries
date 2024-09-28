import { has } from "./has.ts";
import type { HasFunction } from "./HasFunction.ts";

/**
 * Check if given object has the `Symbol.iterator` symbol.
 *
 * @example
 * ```typescript
 * hasIteratorSymbol({ [Symbol.iterator]() {} }); // true
 * hasIteratorSymbol({ bar: "bar" }); // false
 * ```
 * @returns `true` when given object has the `Symbol.iterator` symbol, `false`
 * otherwise.
 */
export const hasIteratorSymbol: HasFunction<typeof Symbol.iterator> = has(
	Symbol.iterator,
);
