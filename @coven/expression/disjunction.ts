import { memo } from "@coven/memo";
import type { Stringable, StringJoin } from "@coven/types";

/**
 * A disjunction specifies multiple alternatives. Any alternative matching the
 * input causes the entire disjunction to be matched.
 *
 * @example
 * ```typescript
 * disjunction("✨", "🔮", "💀"); // "✨|🔮|💀"
 * ```
 * @see [Disjunction](https://coven.to/mdn/Regular_expressions/Disjunction)
 * @param alternatives Alternative patterns, composed of a sequence of atoms and assertions.
 */
export const disjunction: <
	const Alternatives extends ReadonlyArray<Stringable>,
>(
	...alternatives: Alternatives
) => StringJoin<Alternatives, "|"> = memo(
	<const Alternatives extends ReadonlyArray<Stringable>>(
		...alternatives: Alternatives
	) => alternatives.join("|") as StringJoin<Alternatives, "|">,
);
