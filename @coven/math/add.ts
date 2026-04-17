import { fallbackAdd } from "./fallbackAdd.ts";
import { numberFunction, type NumberFunction } from "./numberFunction.ts";
import { preciseAdd } from "./preciseAdd.ts";

/**
 * Curried add operation using {@linkcode preciseAdd}.
 *
 * @example
 * ```typescript
 * const addDot2 = add(0.2);
 *
 * addDot2(0.1); // 0.3
 * ```
 * @see {@linkcode preciseAdd}
 *
 * @param augend Augend value to be on the right side.
 * @returns Curried function with `augend` in context.
 */
export const add: NumberFunction = numberFunction(preciseAdd, fallbackAdd);
