import { memo } from "@coven/memo";
import type { Unary } from "@coven/types";

/**
 * Delayed evaluation function.
 *
 * @example
 * ```typescript
 * import { identity } from "@coven/utils";
 *
 * const always = thunk(identity);
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
		memo(() => unary(input));
