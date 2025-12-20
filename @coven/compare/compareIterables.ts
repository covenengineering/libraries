import {
	getIterator,
	iteratorFunctionToIterableIterator,
	map,
} from "@coven/iterables";
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
 * @example Compare 2 arrays of numbers
 * ```typescript
 * const compare1342 = compareIterables([13, 42]);
 *
 * compare1342([13, 42]); // Yields nothing
 * compare1342([13, 665]); // Yields { kind: "UPDATE", left: 42, right: 665, path: [1] }
 * ```
 * @see {@linkcode compare}
 * @param left Original iterable.
 * @returns Curried generator with `left` in context.
 */
export const compareIterables =
	<LeftItem>(
		left: Iterable<LeftItem>,
	): CurriedComparison<Iterable<LeftItem>> =>
	/**
	 * Curried {@linkcode compareIterables} with `left` set in context.
	 *
	 * @param right New iterable.
	 * @returns Generator with differences.
	 */
	(right) =>
		iteratorFunctionToIterableIterator(function* (): Generator<Difference> {
			const leftIterator = getIterator(left);
			const rightIterator = getIterator(right);

			for (
				let index = 0,
					{ done: leftDone = false, value: leftValue } =
						leftIterator.next(),
					{ done: rightDone = false, value: rightValue } =
						rightIterator.next();
				!(leftDone && rightDone);
				index += 1,
					{ done: leftDone = false, value: leftValue } =
						leftIterator.next(),
					{ done: rightDone = false, value: rightValue } =
						rightIterator.next()
			) {
				yield* map(pathPrepend(index))(
					compare(leftDone ? MISSING_VALUE : leftValue)(
						rightDone ? MISSING_VALUE : rightValue,
					),
				);
			}
		});
