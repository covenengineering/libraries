import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";
import {
	CREATE,
	DELETE,
	KIND,
	LEFT,
	MISSING,
	RIGHT,
	UPDATE,
} from "./constants.ts";

/**
 * Turns the given `left` and `right` values into one of the following:
 *
 * -   If only `left` is present: `DeleteDifference`.
 * -   If only `right` is present: `CreateDifference`.
 * -   If both `left` and `right` are present: `UpdateDifference`.
 *
 * @example
 * ```typescript
 * compare("🧙‍♀️")(MISSING); // yields [{ kind: "DELETE", left: "🧙‍♀️", path: [] }]
 * compare(MISSING)("🎃"); // yields [{ kind: "CREATE", right: "🎃", path: [] }]
 * compare("🧙‍♀️")("🎃"); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: [] }]
 * compare("🧙‍♀️")("🧙‍♀️"); // yields []
 * ```
 * @see {@link Difference}
 * @param left Left/Original value.
 * @returns Curried generator with `left` in context.
 */
export const valueToDifference = (
	left: unknown,
): CurriedComparison<unknown> =>
	left === MISSING
		/**
		 * Curried {@link valueToDifference} with `left` in context.
		 * @param right Right/New value.
		 * @returns Difference object.
		 */
		? function* (right: unknown): Generator<Difference> {
			right === MISSING
				? undefined
				: yield ({ [KIND]: CREATE, [RIGHT]: right });
		}
		/**
		 * Curried {@link valueToDifference} with `left` in context.
		 * @param right Right/New value.
		 * @returns Difference object.
		 */
		: function* (right: unknown): Generator<Difference> {
			yield ({
				[LEFT]: left,
				...(right === MISSING
					? { [KIND]: DELETE }
					: { [KIND]: UPDATE, [RIGHT]: right }),
			});
		};
