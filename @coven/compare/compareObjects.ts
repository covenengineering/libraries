import type { Just, ReadonlyIterable, ReadonlyIterator } from "@coven/types";
import { compareIterables } from "./compareIterables.ts";
import { compareProperties } from "./compareProperties.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";

/**
 * Function to compare a `left` and a `right` which are both objects.
 *
 * @example
 * ```typescript
 * const compareFoo = compareObjects({ foo: "🧙‍♀️" });
 * compareFoo({ foo: "🎃" }); // yields [{ kind: "UPDATE", left: "🧙‍♀️", right: "🎃", path: ["foo"] }]
 * ```
 * @see {@link compareIterables}
 * @see {@link compareProperties}
 * @param left Left/Original object.
 * @returns Curried generator with `left` in context.
 */
export const compareObjects = (left: object): CurriedComparison<object> => {
	const comparePropertiesLeft = compareProperties(left) as (
		right: object,
	) => Generator<Difference>;
	const leftIsIterator = Symbol.iterator in left;
	const compareIterableLeft = leftIsIterator
		? compareIterables(left as ReadonlyIterable)
		: undefined;

	return leftIsIterator
		? /**
		   * Curried {@link compareObjects} with `left` set in context.
		   * @param right Right/New object.
		   * @returns Generator with differences.
		   */
		  function* (right): ReadonlyIterator<Difference> {
				yield* Symbol.iterator in right
					? (compareIterableLeft as Just<typeof compareIterableLeft>)(
							right as ReadonlyIterable,
					  )
					: comparePropertiesLeft(right);
		  }
		: comparePropertiesLeft;
};
