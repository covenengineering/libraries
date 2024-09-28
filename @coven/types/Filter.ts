import type { Unary } from "./Unary.ts";

/**
 * Unary function that returns a `boolean`, useful for cases where a function
 * needs to check if a certain condition holds for an input value.
 *
 * @example
 * ```typescript
 * const isEven = (input => input % 2 === 0) satisfies Filter<[input: number]>;
 * ```
 * @see {Unary}
 * @template Argument Tuple with name of the input value of the filter function.
 */
export type Filter<Argument extends readonly [unknown]> = Unary<
	Argument,
	boolean
>;
