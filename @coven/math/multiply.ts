import { fallbackMultiply } from "./fallbackMultiply.ts";
import { numberFunction, type NumberFunction } from "./numberFunction.ts";
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
 * @param multiplier Multiplier value to be used in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const multiply: NumberFunction = numberFunction(
	preciseMultiply,
	fallbackMultiply,
);
