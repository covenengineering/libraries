import type { CurriedComparison } from "./CurriedComparison.ts";
import { DELETE_KIND } from "./DELETE_KIND.ts";
import type { Difference } from "./Difference.ts";
import { MISSING_VALUE } from "./MISSING_VALUE.ts";
import { CREATE_KIND } from "./mod.ts";
import { UPDATE_KIND } from "./UPDATE_KIND.ts";

/**
 * Yields a {@linkcode Difference} out of a `left` and a `right` value.
 *
 * The possible yielded values are:
 *
 * -   If only `left` is present: `DeleteDifference`.
 * -   If only `right` is present: `CreateDifference`.
 * -   If both `left` and `right` are present: `UpdateDifference`.
 *
 * @example
 * ```typescript
 * import { MISSING_VALUE } from "@coven/compare";
 *
 * differentiate("🧙‍♀️")(MISSING_VALUE); // yields [{ kind: "DELETE", left: "🧙‍♀️", path: [] }]
 * differentiate(MISSING_VALUE)("🎃"); // yields [{ kind: "CREATE", right: "🎃", path: [] }]
 * differentiate("🧙‍♀️")("🎃"); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: [] }]
 * differentiate("🧙‍♀️")("🧙‍♀️"); // yields []
 * ```
 * @see {@linkcode Difference}
 * @param left Left/Original value.
 * @returns Curried generator with `left` in context.
 */
export const differentiate = (
	left: unknown,
): CurriedComparison<unknown> =>
	left === MISSING_VALUE
		/**
		 * Curried {@linkcode valueToDifference} with `left` in context.
		 *
		 * @param right Right/New value.
		 * @returns Difference object.
		 */
		? function* (right: unknown): Generator<Difference> {
			right === MISSING_VALUE
				? undefined
				: yield ({ kind: CREATE_KIND, right: right });
		}
		/**
		 * Curried {@linkcode valueToDifference} with `left` in context.
		 *
		 * @param right Right/New value.
		 * @returns Difference object.
		 */
		: function* (right: unknown): Generator<Difference> {
			yield ({
				left,
				...(right === MISSING_VALUE
					? { kind: DELETE_KIND }
					: { kind: UPDATE_KIND, right: right }),
			});
		};
