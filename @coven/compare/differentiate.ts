import { EMPTY_ITERABLE_ITERATOR, toIterable } from "@coven/iterables";
import { is, isSigil } from "@coven/predicates";
import { CREATE_KIND } from "./CREATE_KIND.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import { DELETE_KIND } from "./DELETE_KIND.ts";
import { UPDATE_KIND } from "./UPDATE_KIND.ts";

/**
 * Yields a `Difference` object out of a `left` and a `right` value.
 *
 * The possible yielded values are:
 *
 * -   If only `left` is present: `DeleteDifference`.
 * -   If only `right` is present: `CreateDifference`.
 * -   If both `left` and `right` are present: `UpdateDifference`.
 *
 * @example Missing right value
 * ```typescript
 * import { SIGIL } from "@coven/constants";
 *
 * differentiate("✨")(SIGIL); // Yields { kind: "DELETE", left: "✨", path: [] }
 * ```
 * @example Missing left value
 * ```typescript
 * import { SIGIL } from "@coven/constants";
 *
 * differentiate(SIGIL)("🎃"); // Yields { kind: "CREATE", right: "🎃", path: [] }
 * ```
 * @example Both values set
 * ```typescript
 * differentiate("✨")("🎃"); // Yields { kind: "UPDATE", left: "✨", right: "🎃", path: [] }
 * differentiate("✨")("✨"); // Yields nothing
 * ```
 * @example Both values missing
 * ```typescript
 * import { SIGIL } from "@coven/constants";
 *
 * differentiate(SIGIL)(SIGIL); // Yields nothing
 * ```
 * @param left Left/Original value.
 * @returns Curried generator with `left` in context.
 */
export const differentiate = (left: unknown): CurriedComparison<unknown> => {
	const isLeft = is(left);

	/**
	 * Curried {@linkcode valueToDifference} with `left` in context.
	 *
	 * @param right Right/New value.
	 * @returns Difference object.
	 */
	return (right) =>
		isLeft(right) ?
			EMPTY_ITERABLE_ITERATOR
		:	toIterable({
				...(isSigil(right) ? { left, kind: DELETE_KIND }
				: isSigil(left) ? { kind: CREATE_KIND, right }
				: { left, kind: UPDATE_KIND, right }),
				path: EMPTY_ITERABLE_ITERATOR,
			});
};
