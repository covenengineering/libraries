import { memo } from "@coven/memo";
import type {
	RegularExpressionFlags,
	Replace,
	Stringable,
	StringJoin,
} from "@coven/types";
import { join } from "./join.ts";

/**
 * Builds a `RegExp` with required `u` flag and strongly typed source (using
 * {@linkcode join}).
 *
 * @example
 * ```typescript
 * import { group, disjunction } from "@coven/expression";
 *
 * build("iu")(group(disjunction(13, "coven"))); // /(?:13|coven)/iu
 * build()(group(disjunction(13, "coven"))); // /(?:13|coven)/u -> use the buildUnicode alias
 * ```
 * @template Flags Regular expression flags ("u" must be included always).
 * @param flags Regular expression flags ("u" by default).
 * @returns Curried function with `flags` set in context.
 */
export const build: <Flags extends RegularExpressionFlags = "u">(
	flags?: Flags | "u",
) => <const Atoms extends ReadonlyArray<Stringable>>(
	...atoms: Atoms
) => Replace<RegExp, Readonly<{ flags: Flags; source: StringJoin<Atoms> }>> =
	memo(
		<Flags extends RegularExpressionFlags = "u">(
			flags: Flags | "u" = "u",
		) =>
			memo(
				<const Atoms extends ReadonlyArray<Stringable>>(
					...atoms: Atoms
				) =>
					new RegExp(join(...atoms), flags) as Replace<
						RegExp,
						Readonly<{
							flags: Flags;
							source: StringJoin<Atoms>;
						}>
					>,
			),
	);
