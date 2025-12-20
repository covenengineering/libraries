import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";

/**
 * Matches a character having a character code between the two specified
 * characters inclusive. Must be used with `characterClass`.
 *
 * @example Create a range
 * ```typescript
 * range("✨")("🔮"); // "✨-🔮"
 * ```
 * @see {@linkcode https://coven.to/mdn/Reference/Regular_expressions/Character_cla}s Character class)
 * @param from Initial value of the range (inclusive).
 * @returns Curried function with `from` in range.
 */
export const range: <From extends Stringable>(
	from: From,
) => /**
 * @param to Final value of the range (inclusive).
 * @returns Range from `from` to `to`.
 */ <To extends Stringable>(to: To) => `${From}-${To}` = memo((from) =>
	memo((to) => `${from}-${to}`),
);
