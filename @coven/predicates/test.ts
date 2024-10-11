import { attempt } from "@coven/parsers";

/**
 * Given a regular expression and a string, returns `true` if the string matches the regular expression.
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
export const test = ({
	flags,
	source,
}: Pick<Readonly<RegExp>, "flags" | "source">): (text: string) => boolean => {
	const attemptTest = attempt((text: string) =>
		new RegExp(source, flags).test(text)
	);

	return (text) => attemptTest(text) ?? false;
};
