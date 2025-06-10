import { memo } from "@coven/memo";
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
) => <const Token extends string>(token: Token) => `${Token}{${Quantities}}` =
	memo(quantities => memo(token => `${token}{${quantities}}`));
