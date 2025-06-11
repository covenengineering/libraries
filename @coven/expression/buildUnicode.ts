import type { Replace, Stringable, StringJoin } from "@coven/types";
import { build } from "./build.ts";

/**
 * Builds an unicode `RegExp` (alias for `build()`).
 *
 * @example Build regular expression with the unicode flag
 * ```typescript
 * import { group, disjunction } from "@coven/expression";
 *
 * buildUnicode(group(disjunction(13, "coven"))); // /(?:13|coven)/u
 * ```
 * @param tokens String tokens to be used as the RegExp source.
 * @returns Regular Expression with the given tokens and the unicode flag.
 */
export const buildUnicode: <const Atoms extends ReadonlyArray<Stringable>>(
	...atoms: Atoms
) => Replace<RegExp, Readonly<{ flags: "u"; source: StringJoin<Atoms> }>> =
	build();
