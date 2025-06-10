/**
 * Unary function, meaning a function that takes a single argument, ideal for
 * currying.
 *
 * @example
 * ```typescript
 * const unary = (input => input + 1) satisfies Unary<[input: number], number>;
 * ```
 * @template Argument Tuple with name and type of the argument of the unary function.
 * @template ReturnType Type of the output of the unary function.
 */
export type Unary<Argument extends Readonly<[unknown]>, ReturnType> =
	Argument["length"] extends 1 ? (..._: Argument) => ReturnType : never;
