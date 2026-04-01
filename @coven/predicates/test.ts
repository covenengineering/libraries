import type { Filter } from "@coven/types";

/**
 * Given a regular expression and a string, returns `true` if the string matches
 * the regular expression.
 *
 * @example
 * ```typescript
 * const testNumbers = test(/\d+/u);
 *
 * testNumbers("123"); // true
 * testNumbers("abc"); // false
 * ```
 * @param regularExpression Instance of `RegExp` or a string.
 * @returns `true` if the string matches the regular expression, `false` otherwise.
 */
export const test =
	({
		flags,
		source,
	}: Pick<Readonly<RegExp>, "flags" | "source">): Filter<[text: string]> =>
	(text) => {
		// deno-lint-ignore coven/no-try
		try {
			return new RegExp(source, flags).test(text);
		} catch {
			return false;
		}
	};
