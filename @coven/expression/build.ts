import type {
	EmptyString,
	ReadonlyArray,
	RegularExpressionFlags,
	Replace,
	Stringable,
	StringJoin,
} from "@coven/types";
import { join } from "./join.ts";

/**
 * Builds a `RegExp` with required `u` flag and strongly typed source (using
 * {@link join}).
 *
 * @example
 * ```typescript
 * build("ui")(group(or(13, "coven"))); // /(?:13|coven)/ui
 * build()(group(or(13, "coven"))); // /(?:13|coven)/u -> use the buildUnicode alias
 * ```
 * @template Flags Regular expression flags ("u" must be included always).
 * @param flags Regular expression flags ("u" by default).
 * @returns Curried function with `flags` set in context.
 */
export const build = <Flags extends RegularExpressionFlags = "u">(
	flags: Flags | "u" = "u",
): <const Tokens extends ReadonlyArray<Stringable>>(
	...tokens: Tokens
) => Replace<
	RegExp,
	{
		readonly flags: Flags;
		readonly source: StringJoin<Tokens, EmptyString>;
	}
> =>
<const Tokens extends ReadonlyArray<Stringable>>(...tokens: Tokens) =>
	new RegExp(join(...tokens), flags) as Replace<
		RegExp,
		{
			readonly flags: Flags;
			readonly source: StringJoin<Tokens, EmptyString>;
		}
	>;
