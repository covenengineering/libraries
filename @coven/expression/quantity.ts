import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";
import { join } from "./join.ts";
import type { StringQuantity } from "./StringQuantity.ts";

/**
 * Takes a {@linkcode StringQuantity} and based on it it defines the maximum and
 * minimum of matches.
 *
 * @example
 * ```typescript
 * quantity(13)("✨", "🔮", "💀"); // "✨🔮💀{13}"
 * quantity("13,")("✨", "🔮", "💀"); // "✨🔮💀{13,}"
 * quantity("13,42")("✨", "🔮", "💀"); // "✨🔮💀{13,42}"
 * ```
 * @see [Quantifier](https://coven.to/mdn/Regular_expressions/Quantifier)
 * @param items Items to be quantified.
 * @returns Quantified items.
 */
export const quantity: <const Quantities extends StringQuantity | number>(
	quantities: Quantities,
) => <const Items extends ReadonlyArray<Stringable>>(
	...items: Items
) => `${StringJoin<Items>}{${Quantities}}` = memo(
	<const Quantities extends StringQuantity | number>(
		quantities: Quantities,
	) =>
		memo(
			<const Items extends ReadonlyArray<Stringable>>(...items: Items) =>
				join(
					...items,
					`{${quantities}}`,
				) as `${StringJoin<Items>}{${Quantities}}`,
		),
);
