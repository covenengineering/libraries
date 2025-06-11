import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { join } from "./join.ts";

/**
 * Matches a minimum of `0` and a maximum of `Infinity` of the given item.
 *
 * @example Create 0 or more quantifier for the given strings
 * ```typescript
 * allow("✨", "🔮", "💀"); // "✨🔮💀*"
 * ```
 * @see [Quantifier](https://coven.to/mdn/Regular_expressions/Quantifier)
 * @param items Items to be quantified.
 * @returns Quantified items.
 */
export const allow: <const Items extends ReadonlyArray<Stringable>>(
	...items: Items
) => `${StringJoin<Items>}*` = memo(
	<const Items extends ReadonlyArray<Stringable>>(...items: Items) =>
		join(...items, "*") as `${StringJoin<Items>}*`,
);
