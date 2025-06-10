import type { Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Attempts to not match the previous input with the given pattern, and it does
 * not consume any of the input. If the match is successful, the current
 * position in the input stays the same. It negatively matches each atom in its
 * pattern in the reverse order.
 *
 * @example
 * ```typescript
 * negativeLookbehind("✨", "🔮", "💀"); // "(?<!✨🔮💀)"
 * ```
 * @see [Lookbehind assertion](https://coven.to/mdn/Regular_expressions/Lookbehind_assertion)
 * @param pattern Pattern to not lookbehind.
 * @returns Negated lookbehind expression.
 */
export const negativeLookbehind: <
	const Pattern extends ReadonlyArray<Stringable>,
>(
	...pattern: Pattern
) => `(?<!${StringJoin<Pattern>})` = captureType("<!");
