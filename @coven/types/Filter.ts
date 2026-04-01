import type { Unary } from "./Unary.ts";

/**
 * {@linkcode Unary} function that returns a `boolean`, useful for cases where a
 * function needs to check if a certain condition holds for an input value.
 *
 * @example
 * ```typescript
 * const isEven = (input => input % 2 === 0) satisfies Filter<[input: number]>;
 * ```
 * @see {@linkcode Unary}
 * @template Parameter Tuple with name of the input value of the filter function.
 */
export type Filter<Parameter extends Readonly<[unknown]>> = Unary<
	Parameter,
	boolean
>;
