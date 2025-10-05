import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { join } from "./join.ts";

/**
 * Matches 1 or more of the preceding item. Equivalent to `{1,}`.
 *
 * @example Create 1 or more quantifier for the given strings
 * ```typescript
 * exists("✨", "🔮", "💀"); // "✨🔮💀+"
 * ```
 * @see {@linkcode https://coven.to/mdn/Regular_expressions/Quantifier Quantifier}
 * @param items Items to be quantified.
 * @returns Quantified items.
 */
export const exists: <const Items extends ReadonlyArray<Stringable>>(
	...items: Items
) => `${StringJoin<Items>}+` = memo(
	<const Items extends ReadonlyArray<Stringable>>(...items: Items) =>
		join(...items, "+") as `${StringJoin<Items>}+`,
);
