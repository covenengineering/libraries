import { pipe } from "./pipe.ts";
import { preciseMultiply } from "./preciseMultiply.ts";

/**
 * Curried multiply operation using {@linkcode pipe} with {@linkcode preciseMultiply}.
 *
 * @example
 * ```typescript
 * const double = multiply(2);
 *
 * double(6.5); // 13
 * ```
 * @see {@linkcode preciseMultiply}
 * @see {@linkcode pipe}
 * @param multiplier Multiplier value to be used in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const multiply: (
	multiplier: number,
) => (multiplicand: number) => number = pipe(preciseMultiply);
