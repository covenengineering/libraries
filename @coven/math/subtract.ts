import { numericFunction, type NumericFunction } from "./numericFunction.ts";
import { preciseSubtract } from "./preciseSubtract.ts";

/**
 * Curried subtract operation using {@linkcode pipe} with {@linkcode preciseSubtract}.
 *
 * @example
 * ```typescript
 * const previous = subtract(1);
 *
 * previous(14); // 13
 * ```
 * @see {@linkcode preciseSubtract}
 * @see {@linkcode NumericFunction}
 * @param subtrahend Subtrahend value to be used in the subtraction.
 * @returns Curried function with `subtrahend` in context.
 */
export const subtract: NumericFunction = numericFunction(preciseSubtract);
