import { is, isObject } from "@coven/predicates";
import type { Just } from "@coven/types";
import { always } from "@coven/utils";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";
import { compareObjects } from "./compareObjects.ts";
import { differentiate } from "./differentiate.ts";

// deno-lint-ignore no-boolean-literal-for-arguments
const alwaysFalse = always(false);

/**
 * Deep-compare values.
 *
 * {@linkcode compare} yields the differences found between `left` and `right`
 * with a descriptive object.
 *
 * @example
 * ```typescript
 * const witchCompare = compare("🧙‍♀️");
 *
 * witchCompare("🧙‍♀️"); // yields []
 * witchCompare("🎃"); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: [] }]
 * compare({ foo: "🧙‍♀️" })({ foo: "🎃" }); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: ["foo"] }]
 * ```
 * @see {@linkcode CurriedComparison}
 * @see {@linkcode compareObjects}
 * @see {@linkcode isObject}
 * @see {@linkcode differentiate}
 * @param left Original value.
 * @returns Curried generator with `left` in context.
 */
export const compare = (left: unknown): CurriedComparison<unknown> => {
	const valuesToDifferenceLeft = differentiate(left);
	const leftIsObject = isObject(left);
	const compareObjectsLeft = leftIsObject ? compareObjects(left) : undefined;
	const isLeft = is(left);
	const isLeftConstructor = leftIsObject ? is(left.constructor) : alwaysFalse;

	return leftIsObject
		/**
		 * Curried {@linkcode compare} with `left` set in context.
		 *
		 * @param right New value.
		 * @yields Differences.
		 */
		? function* (right): Generator<Difference> {
			isLeft(right) ? undefined : yield* (
				isObject(right) &&
					isLeftConstructor((right as object).constructor)
					? compareObjectsLeft as Just<typeof compareObjectsLeft>
					: valuesToDifferenceLeft
			)(right);
		}
		/**
		 * Curried {@linkcode compare} with `left` set in context.
		 *
		 * @param right New value.
		 * @yields Differences.
		 */
		: function* (right): Generator<Difference> {
			isLeft(right) ? undefined : (
				yield* valuesToDifferenceLeft(right)
			);
		};
};
