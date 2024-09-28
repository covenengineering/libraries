import type { ReadonlyIterable, ReadonlyIterator } from "@coven/types";
import { compare } from "./compare.ts";
import { DONE, MISSING, NEXT, VALUE } from "./constants.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";
import { pathPrepend } from "./pathPrepend.ts";

/**
 * Function to compare a `left` and a `right` which are both iterables.
 *
 * @example
 * ```typescript
 * const compare1342 = compare([13, 42]);
 * compare1342([13, 42]); // yields []
 * compare1342([13, 665]); // yields [{ kind: "UPDATE", left: 42, right: 665, path: [1] }]
 * ```
 * @see {@link compare}
 * @param left Left/Original iterable.
 * @returns Curried generator with `left` in context.
 */
export const compareIterables = (
	left: ReadonlyIterable,
): CurriedComparison<ReadonlyIterable> => {
	const leftIterator = left[Symbol.iterator]();

	/**
	 * Curried {@link compareIterables} with `left` set in context.
	 * @param right Right/New iterable.
	 * @returns Generator with differences.
	 */
	return function* (right): ReadonlyIterator<Difference> {
		const rightIterator = right[Symbol.iterator]();

		for (
			let index = 0,
				{ [DONE]: leftDone = false, [VALUE]: leftValue } = leftIterator
					[NEXT](),
				{ [DONE]: rightDone = false, [VALUE]: rightValue } =
					rightIterator[NEXT]();
			!(leftDone && rightDone);
			index += 1,
				{ [DONE]: leftDone = false, [VALUE]: leftValue } = leftIterator
					[NEXT](),
				{ [DONE]: rightDone = false, [VALUE]: rightValue } =
					rightIterator[NEXT]()
		) {
			yield* compare(leftDone ? MISSING : leftValue)(
				rightDone ? MISSING : rightValue,
			).map(pathPrepend(index));
		}
	};
};
