import type { Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Attempts to match the previous input with the given pattern, but it does not
 * consume any of the input. If the match is successful, the current position in
 * the input stays the same. It matches each atom in its pattern in the reverse
 * order.
 *
 * @example Create lookbehind
 * ```typescript
 * lookbehind("✨", "🔮", "💀"); // "(?<=✨🔮💀)"
 * ```
 * @see [Lookbehind assertion](https://coven.to/mdn/Regular_expressions/Lookbehind_assertion)
 * @param pattern Pattern to lookbehind.
 * @returns Lookbehind expression.
 */
export const lookbehind: <const Pattern extends ReadonlyArray<Stringable>>(
	...pattern: Pattern
) => `(?<=${StringJoin<Pattern>})` = captureType("<=");
