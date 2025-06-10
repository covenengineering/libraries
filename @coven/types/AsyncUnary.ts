import type { Unary } from "./Unary.ts";

/**
 * Asynchronous {@linkcode Unary}, a function that takes a single argument and
 * returns a `Promise`, ideal for promise chaining.
 *
 * @example
 * ```typescript
 * const asyncUnary = (input => Promise.resolve(input + 1)) satisfies AsyncUnary<[input: number], number>;
 * ```
 * @template Argument Single with name and type of the argument of the unary function.
 * @template ReturnType Type of the output of the unary function (will be wrapped in a `Promise`).
 */
export type AsyncUnary<
	Argument extends Readonly<[unknown]>,
	ReturnType,
> = Unary<Argument, Promise<ReturnType>>;
