import type { Just, Maybe, ReadonlyArray } from "@coven/types";

/**
 * Attempts to run a function and silences throws.
 *
 * It silences the `throw`s by wrapping it with a `try/catch` and returning
 * `undefined` instead.
 *
 * @example
 * ```typescript
 * const willFail = () => {
 * 	throw new Error("fail");
 * };
 *
 * const safeWillFail = attempt(willFail);
 * safeWillFail(); // undefined
 * ```
 * @template Arguments Type of the arguments of the function to be wrapped.
 * @param wrappedFunction Function to be wrapped.
 * @returns Function wrapped in `try`/`catch`.
 */
export const attempt = <Arguments extends ReadonlyArray, Output>(
	wrappedFunction: (...wrappedArguments: Arguments) => Output,
): (...parameters: Arguments) => Maybe<Output> =>
(...parameters) => {
	try {
		return wrappedFunction(...parameters) as Just<Output>;
	} catch {
		return undefined;
	}
};
