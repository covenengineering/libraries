import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";

/**
 * Matches a character having a character code between the two specified
 * characters inclusive. Must be used with `set`.
 */
export const range = memo(
	<From extends Stringable>(
		from: From,
	): (<To extends Stringable>(to: To) => `${From}-${To}`) =>
		memo(to => `${from}-${to}`),
);
