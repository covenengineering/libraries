import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";

/**
 * Concatenates items.
 *
 * @example Concatenate strings
 * ```typescript
 * join("✨", "🔮", "💀"); // "✨🔮💀"
 * ```
 * @param items Items to join.
 * @returns Concatenated items.
 */
export const join: <const Items extends ReadonlyArray<Stringable>>(
	...items: Items
) => StringJoin<Items> = memo(
	<const Items extends ReadonlyArray<Stringable>>(...items: Items) =>
		items.join("") as StringJoin<Items>,
);
