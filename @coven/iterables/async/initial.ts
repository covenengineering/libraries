import type {
	AwaitableIterable,
	AwaitableIterableIterator,
	IterableItem,
} from "@coven/types";
import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Get all elements except the last one of an iterable or asynchronous iterable.
 *
 * @example
 * ```typescript
 * initial([1, 2, 3]); // [1, 2]
 * ```
 * @param iterable Iterable to get the items from.
 * @returns Iterable with all items except the last one.
 */
export const initial = <Iterable extends AwaitableIterable>(
	iterable: Iterable,
): AwaitableIterableIterator<IterableItem<Iterable>> =>
	iteratorFunctionToAsyncIterableIterator(
		async function* (): AsyncGenerator<unknown> {
			const iterator = getIterator(iterable);
			let item = await iterator.next();

			for (; !item.done;) {
				const value = item.value;

				// deno-lint-ignore no-await-in-loop
				item = await iterator.next();

				if (!item.done) {
					yield value;
				}
			}
		},
	) as AwaitableIterableIterator<IterableItem<Iterable>>;
