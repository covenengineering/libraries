import type { Effect, Unary } from "@coven/types";

/**
 * Tap into a value before calling a function. Useful for logging values.
 *
 * @example
 * ```typescript
 * const log = tap(console.log);
 * const double = (value: number) => value * 2;
 * const doubleAndLog = log(double);
 *
 * doubleAndLog(2); // 4 (returns and logs 4)
 * ```
 * @param tapper Tapper function to be called with the value.
 * @returns Curried function with `tapper` in context.
 */
export const tap = <Input, Output>(
	tapper: Unary<[input: Input], Output>,
): <Tapped extends Effect<[input: Input]>>(
	tapped: Tapped,
) => Unary<[input: Input], Output> =>
(tapped) =>
(input) => (tapper(input), tapped(input)) as Output;
