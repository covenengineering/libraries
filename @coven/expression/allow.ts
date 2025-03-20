import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";

/**
 * Matches 0 or more of the preceding token.
 */
export const allow = memo(
	<const Token extends Stringable>(token: Token): `${Token}*` =>
		`${token}*` as const,
);
