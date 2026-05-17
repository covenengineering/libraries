import { numericFunction, type NumericFunction } from "./numericFunction.ts";
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
 * @see {@linkcode NumericFunction}
 * @param divisor Divisor to be used in the division.
 * @returns Curried function with `divisor` in context.
 */
export const divide: NumericFunction = numericFunction(preciseDivide);
