import type {
	EmptyString,
	ReadonlyArray,
	Replace,
	Stringable,
	StringJoin,
} from "@coven/types";
import { build } from "./build.ts";

/**
 * Builds an unicode `RegExp` (alias for `build()`).
 *
 * @example
 * ```typescript
 * import { group, or } from "@coven/expression";
 *
 * buildUnicode(group(or(13, "coven"))); // /(?:13|coven)/u
 * ```
 * @param tokens String tokens to be used as the RegExp source.
 * @returns Regular Expression with the given tokens and the unicode flag.
 */
export const buildUnicode: <const Tokens extends ReadonlyArray<Stringable>>(
	...tokens: Tokens
) => Replace<
	RegExp,
	{
		readonly flags: "u";
		readonly source: StringJoin<Tokens, EmptyString>;
	}
> = build();
