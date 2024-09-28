import { attempt } from "@coven/parsers";
import type { Maybe } from "../types/mod.ts";

/**
 * Given a regular expression and a string, returns `true` if the string matches the regular expression.
 *
 * @example
 * ```typescript
 * const matchNumbers = match(/\d+/u);
 *
 * matchNumbers("123"); // ["123"]
 * matchNumbers("abc"); // undefined
 * ```
 * @param regularExpression Instance of `RegExp` or a string.
 * @returns `true` if the string matches the regular expression, `false` otherwise.
 */
export const match = (
	{ flags, source }: Pick<Readonly<RegExp>, "flags" | "source">,
): (text: string) => Maybe<RegExpMatchArray> =>
	attempt((text: string) =>
		text.match(new RegExp(source, flags)) ?? undefined
	);
