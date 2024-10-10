import { pipe } from "./pipe.ts";
import { preciseMultiply } from "./preciseMultiply.ts";

/**
 * Curried multiply operation using {@link pipe} with {@link preciseMultiply}.
 *
 * @example
 * ```typescript
 * const double = multiply(2);
 *
 * double(6.5); // 13
 * ```
 * @see {@link preciseMultiply}
 * @see {@link pipe}
 * @param multiplier Multiplier value to be used in the multiplication.
 * @returns Curried function with `multiplier` in context.
 */
export const multiply: (
	multiplier: number,
) => (multiplicand: number) => number = pipe(preciseMultiply);
