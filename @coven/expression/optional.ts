import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";

/**
 * Matches 0 or 1 of the preceding token, effectively making it optional. Also
 * makes the preceding quantifier lazy, causing it to match as few characters as
 * possible. By default, quantifiers are greedy, and will match as many
 * characters as possible.
 */
export const optional: <const Token extends Stringable>(
	token: Token,
) => `${Token}?` = memo(token => `${token}?`);
