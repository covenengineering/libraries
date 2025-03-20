import type { AwaitableIterable, Unary } from "@coven/types";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Map for iterables and asynchronous iterables.
 *
 * @example
 * ```typescript
 * const double = (value: number) => value * 2;
 * const mapDouble = map(double);
 *
 * mapDouble([1, 2, 3]); // [2, 4, 6]
 * ```
 * @param mapper Mapper function.
 * @returns Generator function with `mapper` function set in context.
 */
export const map =
	<Item, MappedItem>(
		mapper: Unary<[item: Item], MappedItem>,
	): ((
		iterable: AwaitableIterable<Item>,
	) => Readonly<AsyncIterableIterator<Awaited<MappedItem>>>) =>
	(iterable: AwaitableIterable<Item>) =>
		iteratorFunctionToAsyncIterableIterator(
			async function* (): AsyncGenerator<Awaited<MappedItem>> {
				for await (const item of iterable) {
					yield mapper(item);
				}
			},
		);
