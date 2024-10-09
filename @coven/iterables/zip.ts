import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Takes two iterables and returns a new iterable with the length of the
 * shortest iterable with tuples containing the items from both.
 *
 * @example
 * ```typescript
 * const zipNumbers = zip([0, 1, 2]);
 * zipNumbers([3, 4, 5]); // [[0, 3], [1, 4], [2, 5]]
 * ```
 * @param iterableFirst One of the iterables to be zipped.
 * @returns Curried function with `iterableFirst` in context.
 */
export const zip =
	<ItemFirst>(
		iterableFirst: Iterable<ItemFirst>,
	): (<ItemSecond>(
		iterableSecond: Iterable<ItemSecond>,
	) => IterableIterator<readonly [ItemFirst, ItemSecond]>) =>
	<ItemSecond>(iterableSecond: Iterable<ItemSecond>) =>
		iteratorFunctionToIterableIterator(function* (): Generator<
			readonly [ItemFirst, ItemSecond]
		> {
			const iteratorSecond = getIterator(iterableSecond);

			for (const itemFirst of iterableFirst) {
				const { done = false, value } = iteratorSecond.next();

				if (done) {
					break;
				}

				yield [itemFirst, value as ItemSecond];
			}
		});
