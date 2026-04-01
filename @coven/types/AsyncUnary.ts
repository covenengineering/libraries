import type { Unary } from "./Unary.ts";

/**
 * Asynchronous {@linkcode Unary}, a function that takes a single parameter and
 * returns a `Promise`, ideal for promise chaining.
 *
 * @example
 * ```typescript
 * const asyncUnary = (input => Promise.resolve(input + 1)) satisfies AsyncUnary<[input: number], number>;
 * ```
 * @template Parameter Single with name and type of the parameter of the unary function.
 * @template ReturnType Type of the output of the unary function (will be wrapped in a `Promise`).
 */
export type AsyncUnary<
	Parameter extends Readonly<[unknown]>,
	ReturnType,
> = Unary<Parameter, Promise<ReturnType>>;
