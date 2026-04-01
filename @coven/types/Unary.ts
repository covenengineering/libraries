import type { Multary } from "./Multary.ts";

/**
 * Unary function, meaning a function that takes a single parameter, ideal for
 * currying.
 *
 * @example
 * ```typescript
 * const unary = (input => input + 1) satisfies Unary<[input: number], number>;
 * ```
 * @template Parameter Tuple with name and type of the parameter of the unary function.
 * @template ReturnType Type of the output of the unary function.
 */
export type Unary<Parameter extends Readonly<[unknown]>, ReturnType> =
	Parameter["length"] extends 1 ? Multary<Parameter, ReturnType> : never;
