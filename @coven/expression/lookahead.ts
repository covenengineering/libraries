import type { Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Attempts to match the subsequent input with the given pattern, but it does
 * not consume any of the input. If the match is successful, the current
 * position in the input stays the same.
 *
 * @example Create lookahead
 * ```typescript
 * lookahead("✨", "🔮", "💀"); // "(?=✨🔮💀)"
 * ```
 * @see [Lookahead assertion](https://coven.to/mdn/Regular_expressions/Lookahead_assertion)
 * @param pattern Pattern to lookahead.
 * @returns Lookahead expression.
 */
export const lookahead: <const Pattern extends ReadonlyArray<Stringable>>(
	...pattern: Pattern
) => `(?=${StringJoin<Pattern>})` = captureType("=");
