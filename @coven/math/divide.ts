import { fallbackDivide } from "./fallbackDivide.ts";
import { numberFunction, type NumberFunction } from "./numberFunction.ts";
import { preciseDivide } from "./preciseDivide.ts";

/**
 * Curried divide operation using {@linkcode preciseDivide}.
 *
 * @example
 * ```typescript
 * const half = divide(2);
 *
 * half(1); // 0.5
 * ```
 * @see {@linkcode preciseDivide}
 * @param divisor Divisor to be used in the division.
 * @returns Curried function with `divisor` in context.
 */
export const divide: NumberFunction = numberFunction(
	preciseDivide,
	fallbackDivide,
);
