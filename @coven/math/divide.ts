import { pipe } from "./pipe.ts";
import { preciseDivide } from "./preciseDivide.ts";

/**
 * Curried divide operation using {@link pipe} with {@link preciseDivide}.
 *
 * @example
 * ```typescript
 * const half = divide(2);
 *
 * half(1); // 0.5
 * ```
 * @see {@link preciseDivide}
 * @see {@link pipe}
 * @param divisor Divisor to be used in the division.
 * @returns Curried function with `divisor` in context.
 */
export const divide: (divisor: number) => (dividend: number) => number =
	pipe(preciseDivide);
