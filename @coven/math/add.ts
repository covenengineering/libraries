import { pipe } from "./pipe.ts";
import { preciseAdd } from "./preciseAdd.ts";

/**
 * Curried add operation using {@linkcode pipe} with {@linkcode preciseAdd}.
 *
 * @example
 * ```typescript
 * const addDot2 = add(0.2);
 *
 * addDot2(0.1); // 0.3
 * ```
 * @see {@linkcode preciseAdd}
 * @see {@linkcode pipe}
 *
 * @param augend Augend value to be on the right side.
 * @returns Curried function with `augend` in context.
 */
export const add: (augend: number) => (addend: number) => number = pipe(
	preciseAdd,
);
