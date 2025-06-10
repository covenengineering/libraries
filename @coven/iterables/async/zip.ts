import type { AwaitableIterable } from "@coven/types";
import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Takes two iterables or asynchronous iterable and returns a new iterable or
 * asynchronous iterable with the length of the shortest iterable with tuples
 * containing the items from both.
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
		iterableFirst: AwaitableIterable<ItemFirst>,
	): (<ItemSecond>(
		iterableSecond: AwaitableIterable<ItemSecond>,
	) => AsyncIterableIterator<Readonly<[ItemFirst, ItemSecond]>>) =>
	<ItemSecond>(iterableSecond: AwaitableIterable<ItemSecond>) =>
		iteratorFunctionToAsyncIterableIterator(
			async function* (): AsyncGenerator<
				Readonly<[ItemFirst, ItemSecond]>
			> {
				const asyncIteratorSecond = getIterator(iterableSecond);

				for await (const itemFirst of iterableFirst) {
					const { done = false, value } =
						await asyncIteratorSecond.next();

					if (done) {
						break;
					}

					yield [itemFirst as ItemFirst, value] as const;
				}
			},
		);
