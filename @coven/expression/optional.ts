import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { join } from "./join.ts";

/**
 * Matches a minimum of `0` and a maximum of `1` of the given item.
 *
 * @example
 * ```typescript
 * optional("✨", "🔮", "💀"); // "✨🔮💀?"
 * ```
 * @see [Quantifier](https://coven.to/mdn/Regular_expressions/Quantifier)
 * @param items Items to be quantified.
 * @returns Quantified items.
 */
export const optional: <const Items extends ReadonlyArray<Stringable>>(
	...items: Items
) => `${StringJoin<Items>}?` = memo(
	<const Items extends ReadonlyArray<Stringable>>(...items: Items) =>
		join(...items, "?") as `${StringJoin<Items>}?`,
);
