import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { join } from "./join.ts";

/**
 * Matches any one of the enclosed characters. You can specify a range of
 * characters by using a hyphen, but if the hyphen appears as the first or last
 * character enclosed in the square brackets, it is taken as a literal hyphen to
 * be included in the character class as a normal character.
 *
 * @example Create character class
 * ```typescript
 * characterClass("✨", "🔮", "💀"); // [✨🔮💀]
 * ```
 * @see [Character class](https://coven.to/mdn/Reference/Regular_expressions/Character_class)
 * @param tokens Tokens to put on the set.
 * @returns Character class with given `tokens` on it.
 */
export const characterClass: <const Tokens extends ReadonlyArray<Stringable>>(
	...tokens: Tokens
) => `[${StringJoin<Tokens>}]` = memo(
	<const Tokens extends ReadonlyArray<Stringable>>(...tokens: Tokens) =>
		`[${join(...tokens)}]` as `[${StringJoin<Tokens>}]`,
);
