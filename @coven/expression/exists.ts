import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";

/**
 * Matches 1 or more of the preceding token.
 */
export const exists: <const Token extends Stringable>(
	token: Token,
) => `${Token}+` = memo(token => `${token}+`);
