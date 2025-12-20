import { EMPTY_ITERABLE_ITERATOR } from "@coven/iterables";
import { is, isIterable, isObject } from "@coven/predicates";
import { compareIterables } from "./compareIterables.ts";
import { compareProperties } from "./compareProperties.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import { differentiate } from "./differentiate.ts";

/**
 * Deep-compare objects.
 *
 * {@linkcode compareObjects} yields the differences found between `left` and
 * `right` with a descriptive object.
 *
 * @example Compare 2 objects with the same property but different value
 * ```typescript
 * const compareMagic = compareObjects({ magic: "✨" });
 * compareMagic({ magic: "🎃" }); // Yields { kind: "UPDATE", left: "✨", right: "🎃", path: ["magic"] }
 * ```
 * @see {@linkcode compareIterables}
 * @see {@linkcode compareProperties}
 * @param left Original object.
 * @returns Curried generator with `left` in context.
 */
export const compareObjects = (left: object): CurriedComparison<unknown> => {
	const comparePropertiesLeft = compareProperties(left);
	const leftIsIterator = isIterable(left);
	const compareIterableLeft = compareIterables(left as Iterable<unknown>);
	const isLeft = is(left);
	const differentiateLeft = differentiate(left);
	const isLeftConstructor = is(left.constructor);

	return leftIsIterator ?
			/**
			 * Curried {@linkcode compareObjects} with `left` set in context.
			 *
			 * @param right New object.
			 * @returns Generator with differences.
			 */
			(right) =>
				isLeft(right) ?
					EMPTY_ITERABLE_ITERATOR
				:	(isObject(right) && isLeftConstructor(right.constructor) ?
						isIterable(right) ? compareIterableLeft
						:	comparePropertiesLeft
					:	differentiateLeft)(right as Iterable<unknown>)
		:	comparePropertiesLeft;
};
