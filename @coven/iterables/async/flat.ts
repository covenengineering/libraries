import { isAwaitableIterable } from "@coven/predicates";
import type { AwaitableIterable } from "@coven/types";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Flattens one level of the given iterable or asynchronous iterable.
 *
 * @example
 * ```typescript
 * flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
 * ```
 * @param iterable Iterable to flatten.
 * @returns Iterable with flatten items.
 */
export const flat = <Iterable extends AwaitableIterable>(
	iterable: Iterable,
): Iterable extends AwaitableIterable<infer Item> ?
	Readonly<
		Item extends AwaitableIterable<infer SubItem> ?
			AsyncIterableIterator<SubItem>
		:	AsyncIterableIterator<Item>
	>
:	never =>
	iteratorFunctionToAsyncIterableIterator(
		async function* (): AsyncGenerator<unknown> {
			for await (const iterableOrItem of iterable as AsyncIterable<unknown>) {
				isAwaitableIterable(iterableOrItem) ?
					yield* iterableOrItem
				:	yield iterableOrItem;
			}
		},
	) as Iterable extends AwaitableIterable<infer Item> ?
		Readonly<
			Item extends AwaitableIterable<infer SubItem> ?
				AsyncIterableIterator<SubItem>
			:	AsyncIterableIterator<Item>
		>
	:	never;
