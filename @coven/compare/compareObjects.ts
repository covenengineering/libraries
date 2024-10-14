import { isIterable } from "@coven/predicates";
import type { Just } from "@coven/types";
import { compareIterables } from "./compareIterables.ts";
import { compareProperties } from "./compareProperties.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";

/**
 * Deep-compare objects.
 *
 * {@linkcode compareObjects} yields the differences found between `left` and
 * `right` with a descriptive object.
 *
 * @example
 * ```typescript
 * const compareFoo = compareObjects({ foo: "🧙‍♀️" });
 * compareFoo({ foo: "🎃" }); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: ["foo"] }]
 * ```
 * @see {@linkcode compareIterables}
 * @see {@linkcode compareProperties}
 * @param left Original object.
 * @returns Curried generator with `left` in context.
 */
export const compareObjects = (left: object): CurriedComparison<object> => {
	const comparePropertiesLeft = compareProperties(left) as (
		right: object,
	) => Generator<Difference>;
	const leftIsIterator = isIterable(left);
	const compareIterableLeft = leftIsIterator
		? compareIterables(left)
		: undefined;

	return leftIsIterator
		/**
		 * Curried {@linkcode compareObjects} with `left` set in context.
		 *
		 * @param right New object.
		 * @returns Generator with differences.
		 */
		? function* (right): Generator<Difference> {
			yield* isIterable(right)
				? (compareIterableLeft as Just<typeof compareIterableLeft>)(
					right as Iterable<object>,
				)
				: comparePropertiesLeft(right);
		}
		: comparePropertiesLeft;
};
