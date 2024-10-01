import type { Class } from "@coven/types";
import type { IsInstanceOfFunction } from "./IsInstanceOfFunction.ts";

/**
 * Takes a `constructor` and checks if given `input` is an instance of it.
 *
 * @example
 * ```typescript
 * const instanceOfArray = instanceOf(Array)
 *
 * instanceOfArray([]); // true
 * instanceOfArray({}); // false
 * ```
 * @returns Returns a curried function with `constructor` in context.
 */
export const isInstanceOf =
	<Expected extends Class<never>>(
		constructor: Expected,
	): IsInstanceOfFunction<Expected> =>
	(input): input is InstanceType<Expected> =>
		input instanceof constructor;
