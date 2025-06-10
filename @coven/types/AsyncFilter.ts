import type { AsyncUnary } from "@coven/types";

/**
 * {@linkcode AsyncUnary} function that returns a promise of `boolean`.
 *
 * @example
 * ```typescript
 * const asyncIsEven = (input => Promise.resolve(input % 2 === 0)) satisfies AsyncFilter<[input: number]>;
 * ```
 * @see {@linkcode AsyncUnary}
 * @template Argument Single with name of the input value of the filter function.
 */
export type AsyncFilter<Argument extends Readonly<[unknown]>> = AsyncUnary<
	Argument,
	boolean
>;
