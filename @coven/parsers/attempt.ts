import type { Just, Maybe } from "@coven/types";

/**
 * Attempts to run a function by wrapping it with a `try/catch` and silences
 * throws, returning `undefined` instead.
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
 * @template Parameters Type of the parameters of the function to be wrapped.
 * @param wrappedFunction Function to be wrapped.
 * @returns Function wrapped in `try`/`catch`.
 */
export const attempt =
	<Parameters extends ReadonlyArray<unknown>, Output>(
		wrappedFunction: (...parameters: Parameters) => Output,
	): ((...parameters: Parameters) => Maybe<Output>) =>
	(...parameters) => {
		// deno-lint-ignore coven/no-try
		try {
			return wrappedFunction(...parameters) as Just<Output>;
		} catch {
			return undefined;
		}
	};
