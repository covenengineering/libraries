import type { Just, ReadonlyIterator } from "@coven/types";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";
import { compareObjects } from "./compareObjects.ts";
import { isObject } from "./isObject.ts";
import { valueToDifference } from "./valueToDifference.ts";

/**
 * Function to compare a `left` and a `right` value, by doing a deep comparison
 * and yielding the differences found with a descriptive object.
 *
 * @example
 * ```typescript
 * const witchCompare = compare("🧙‍♀️")
 *
 * witchCompare("🧙‍♀️"); // yields []
 * witchCompare("🎃"); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: [] }]
 * compare({ foo: "🧙‍♀️" })({ foo: "🎃" }); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: ["foo"] }]
 * ```
 * @see {@link CurriedComparison}
 * @see {@link compareObjects}
 * @see {@link isObject}
 * @see {@link valueToDifference}
 * @param left Left/Original value.
 * @returns Curried generator with `left` in context.
 */
export const compare = (left: unknown): CurriedComparison<unknown> => {
	const valuesToDifferenceLeft = valueToDifference(left);
	const leftIsObject = isObject(left);
	const compareObjectsLeft = leftIsObject ? compareObjects(left) : undefined;

	return leftIsObject ?
			/**
			 * Curried {@link compare} with `left` set in context.
			 *
			 * @param right Right/New value.
			 * @yields Differences.
			 */
			function* (right): ReadonlyIterator<Difference> {
				Object.is(left, right) ? undefined
				: isObject(right) && left.constructor === right.constructor ?
					yield* (
						compareObjectsLeft as Just<typeof compareObjectsLeft>
					)(right)
				:	yield valuesToDifferenceLeft(right);
			}
			/**
			 * Curried {@link compare} with `left` set in context.
			 *
			 * @param right Right/New value.
			 * @yields Differences.
			 */
		:	function* (right): ReadonlyIterator<Difference> {
				Object.is(left, right) ? undefined : (
					yield valuesToDifferenceLeft(right)
				);
			};
};
