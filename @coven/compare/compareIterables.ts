import { SIGIL } from "@coven/constants";
import {
	append,
	forever,
	iteratorFunctionToIterableIterator,
	map,
	zip,
	zipIndex,
} from "@coven/iterables";
import { always } from "@coven/utils";
import { compare } from "./compare.ts";
import type { CurriedComparison } from "./CurriedComparison.ts";
import type { Difference } from "./Difference.ts";
import { pathPrepend } from "./pathPrepend.ts";

const appendSigilForever = append(forever(always(SIGIL)));

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
export const compareIterables = <LeftItem>(
	left: Iterable<LeftItem>,
): CurriedComparison<Iterable<LeftItem>> => {
	const zipExtendedLeft = zip(zipIndex(appendSigilForever(left)));

	/**
	 * Curried {@linkcode compareIterables} with `left` set in context.
	 *
	 * @param right New iterable.
	 * @returns Generator with differences.
	 */
	return (right) =>
		iteratorFunctionToIterableIterator(function* (): Generator<Difference> {
			for (const [[index, leftValue], rightValue] of zipExtendedLeft(
				appendSigilForever(right),
			)) {
				if (leftValue !== SIGIL || rightValue !== SIGIL) {
					yield* map(pathPrepend(index))(
						compare(leftValue)(rightValue),
					);
				} else {
					return;
				}
			}
		});
};
