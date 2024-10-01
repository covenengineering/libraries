import type { Unary } from "@coven/types";

/**
 * Delayed evaluation function.
 *
 * @example
 * ```typescript
 * const always = thunk(id);
 * const alwaysFoo = always("foo")
 * alwaysFoo(); // "foo"
 * ```
 * @returns Function that will run the given function when called.
 */
export const thunk =
	<Input, Output>(
		unary: Unary<[input: Input], Output>,
	): ((input: Input) => () => Output) =>
	input =>
	() =>
		unary(input);
