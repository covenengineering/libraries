import type { Stringable } from "@coven/types";

/**
 * Matches a character having a character code between the two specified
 * characters inclusive. Must be used with `set`.
 */
export const range =
	<From extends Stringable>(
		from: From,
	): (<To extends Stringable>(to: To) => `${From}-${To}`) =>
	to =>
		`${from}-${to}`;
