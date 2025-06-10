import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { START } from "./boundaryAssertionts.ts";
import { characterClass } from "./characterClass.ts";

/**
 * Matches any character not enclosed by this function. You can specify a range
 * of characters by using a hyphen, but if the hyphen appears as the first or
 * last character enclosed in the square brackets, it is taken as a literal
 * hyphen to be excluded in the complement class as a normal character.
 *
 * @example
 * ```typescript
 * complementClass("✨", "🔮", "💀"); // [^✨🔮💀]
 * ```
 * @see [Character class](https://coven.to/mdn/Reference/Regular_expressions/Character_class)
 * @param tokens Tokens to put on the set.
 * @returns Complement class with given `tokens` on it.
 */
export const complementClass: <const Tokens extends ReadonlyArray<Stringable>>(
	...tokens: Tokens
) => `[${StringJoin<["^", ...Tokens], "">}]` = memo((...tokens) =>
	characterClass(START, ...tokens),
);
