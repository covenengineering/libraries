import type { Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Attempts to not match the subsequent input with the given pattern, and it
 * does not consume any of the input. If the match is not successful, the
 * current position in the input stays the same.
 *
 * @example
 * ```typescript
 * negativeLookahead("✨", "🔮", "💀"); // "(?!✨🔮💀)"
 * ```
 * @see [Lookahead assertion](https://coven.to/mdn/Regular_expressions/Lookahead_assertion)
 * @param pattern Negated pattern to lookahead.
 * @returns Negated lookahead expression.
 */
export const negativeLookahead: <
	const Pattern extends ReadonlyArray<Stringable>,
>(
	...pattern: Pattern
) => `(?!${StringJoin<Pattern>})` = captureType("!");
