import type { Unary } from "@coven/types";

/**
 * Takes a value and applies a function to it.
 *
 * @example
 * ```typescript
 * const applyTo10 = applyTo(10);
 *
 * applyTo10((value: number) => value * 2); // 20
 * applyTo10((value: number) => value / 2); // 5
 * ```
 * @returns Function that expects a function that will receive the `input`.
 */
export const applyTo = <const Input>(
	input: Input,
): <const Output>(unary: Unary<[input: Input], Output>) => Output =>
(unary) => unary(input);
