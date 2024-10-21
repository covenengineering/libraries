import { pipe } from "./pipe.ts";
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
 * @see {@linkcode pipe}
 * @param subtrahend Subtrahend value to be used in the subtraction.
 * @returns Curried function with `subtrahend` in context.
 */
export const subtract: (subtrahend: number) => (minuend: number) => number =
	pipe(preciseSubtract);
