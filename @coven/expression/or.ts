import type { ReadonlyArray, Stringable, StringJoin } from "@coven/types";

/**
 * Acts like a boolean OR. Matches the expression before or after the |. It can
 * operate within a group, or on a whole expression. The patterns will be tested
 * in order.
 */
export const or = <const Tokens extends ReadonlyArray<Stringable>>(
	...tokens: Tokens
): StringJoin<Tokens, "|"> => tokens.join("|") as StringJoin<Tokens, "|">;
