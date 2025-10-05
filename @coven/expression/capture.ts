import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { join } from "./join.ts";

/**
 * A capturing group groups a subpattern, allowing you to apply a
 * [quantifier](https://coven.to/mdn/Regular_expressions/Quantifier) to
 * the entire group or use
 * [disjunctions](https://coven.to/mdn/Regular_expressions/Disjunction) within
 * it. It memorizes information about the subpattern match, so that you can
 * refer back to it later with a
 * [backreference](https://coven.to/mdn/Regular_expressions/Backreference), or
 * access the information through the match results.
 *
 * @example Create capture group
 * ```typescript
 * capture("✨", "🔮", "💀"); // "(✨🔮💀)"
 * ```
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Capturing_group Capturing group}
 * @param pattern Pattern to capture.
 * @returns Captured pattern.
 */
export const capture: <const Pattern extends ReadonlyArray<Stringable>>(
	...pattern: Pattern
) => `(${StringJoin<Pattern>})` = memo(
	<const Pattern extends ReadonlyArray<Stringable>>(...pattern: Pattern) =>
		`(${join(...pattern)})` as `(${StringJoin<Pattern>})`,
);
