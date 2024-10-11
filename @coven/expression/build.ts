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
 */
export const build =
	<Flags extends RegularExpressionFlags = "u">(
		flags: Flags | "u" = "u",
	): (<const Tokens extends ReadonlyArray<Stringable>>(
		...tokens: Tokens
	) => Replace<
		RegExp,
		{
			readonly flags: Flags;
			readonly source: StringJoin<Tokens, EmptyString>;
		}
	>) =>
	<const Tokens extends ReadonlyArray<Stringable>>(...tokens: Tokens) =>
		new RegExp(join(...tokens), flags) as Replace<
			RegExp,
			{
				readonly flags: Flags;
				readonly source: StringJoin<Tokens, EmptyString>;
			}
		>;
