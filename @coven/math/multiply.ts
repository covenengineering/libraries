import { type NumericFunction, numericFunction } from "./numericFunction.ts";
import { preciseMultiply } from "./preciseMultiply.ts";

/**
 * Curried multiply operation using {@linkcode preciseMultiply}.
 *
 * @example
 * ```typescript
 * const double = multiply(2);
 *
 * double(6.5); // 13
 * ```
 * @see {@linkcode preciseMultiply}
 * @see {@linkcode NumericFunction}
 * @param multiplier Multiplier value to be used in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const multiply: NumericFunction = numericFunction(preciseMultiply);
