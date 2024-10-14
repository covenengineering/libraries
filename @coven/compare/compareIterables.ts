import { getIterator } from "@coven/iterables";
import { compare } from "./compare.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";
import { MISSING_VALUE } from "./MISSING_VALUE.ts";
import { pathPrepend } from "./pathPrepend.ts";

/**
 * Deep-compare iterables.
 *
 * {@linkcode compareIterables} yields the differences found between `left` and
 * `right` with a descriptive object.
 *
 * @example
 * ```typescript
 * const compare1342 = compareIterables([13, 42]);
 * compare1342([13, 42]); // yields []
 * compare1342([13, 665]); // yields [{ kind: "UPDATE", left: 42, right: 665, path: [1] }]
 * ```
 * @see {@linkcode compare}
 * @param left Original iterable.
 * @returns Curried generator with `left` in context.
 */
export const compareIterables = <LeftItem>(
	left: Iterable<LeftItem>,
): CurriedComparison<Iterable<LeftItem>> => {
	const leftIterator = getIterator(left);
	const leftIteratorNext = leftIterator.next.bind(leftIterator);

	/**
	 * Curried {@linkcode compareIterables} with `left` set in context.
	 *
	 * @param right New iterable.
	 * @returns Generator with differences.
	 */
	return function* (right): Generator<Difference> {
		const rightIterator = getIterator(right);
		const rightIteratorNext = rightIterator.next.bind(rightIterator);

		for (
			let index = 0,
				{ done: leftDone = false, value: leftValue } =
					leftIteratorNext(),
				{ done: rightDone = false, value: rightValue } =
					rightIteratorNext();
			!(leftDone && rightDone);
			index += 1,
				{ done: leftDone = false, value: leftValue } =
					leftIteratorNext(),
				{ done: rightDone = false, value: rightValue } =
					rightIteratorNext()
		) {
			yield* compare(leftDone ? MISSING_VALUE : leftValue)(
				rightDone ? MISSING_VALUE : rightValue,
			).map(pathPrepend(index));
		}
	};
};
