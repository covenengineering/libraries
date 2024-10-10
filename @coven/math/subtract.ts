import { pipe } from "./pipe.ts";
import { preciseSubtract } from "./preciseSubtract.ts";

/**
 * Curried subtract operation using {@link pipe} with {@link preciseSubtract}.
 *
 * @example
 * ```typescript
 * const previous = subtract(1);
 *
 * previous(14); // 13
 * ```
 * @see {@link preciseSubtract}
 * @see {@link pipe}
 * @param subtrahend Subtrahend value to be used in the subtraction.
 * @returns Curried function with `subtrahend` in context.
 */
export const subtract: (subtrahend: number) => (minuend: number) => number =
	pipe(preciseSubtract);
