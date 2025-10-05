import type { Stringable, StringJoin } from "@coven/types";
import { captureType } from "./captureType.ts";

/**
 * Group a subpattern, allowing you to apply a
 * [quantifier](https://coven.to/mdn/Regular_expressions/Quantifier) to the
 * entire group or use
 * [disjunctions](https://coven.to/mdn/Regular_expressions/Disjunction) within
 * it. It acts like the
 * [grouping operator](https://coven.to/mdn/Operators/Grouping) in JavaScript
 * expressions, and unlike
 * [capturing groups](https://coven.to/mdn/Regular_expressions/Capturing_group),
 * it does not memorize the matched text, allowing for better performance and
 * avoiding confusion when the pattern also contains useful capturing groups.
 *
 * @example Create non-capturing group
 * ```typescript
 * group("✨", "🔮", "💀"); // "(?:✨🔮💀)"
 * ```
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Non-capturing_group Non-capturing group}
 * @param pattern Pattern to capture.
 * @returns Captured pattern.
 */
export const group: <const Pattern extends ReadonlyArray<Stringable>>(
	...pattern: Pattern
) => `(?:${StringJoin<Pattern>})` = captureType(":");
