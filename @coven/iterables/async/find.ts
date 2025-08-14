import type {
	AsyncUnary,
	AwaitableIterable,
	Filter,
	Maybe,
	Predicate,
} from "@coven/types";

/**
 * Returns the value of the first item in the iterable or asynchronous iterable
 * where predicate is `true`, `undefined` otherwise.
 *
 * @example
 * ```typescript
 * const findEven = find((number: number) => number % 2 === 0);
 * findEven([1, 2, 3, 4]); // 2
 * findEven([1, 3, 5, 7]); // undefined
 * ```
 * @param predicate Predicate function to search for item.
 * @returns Curried function with `predicate` set in context.
 */
export const find: {
	<Item, Predicated extends Item>(
		predicate: Predicate<Item, Predicated>,
	): AsyncUnary<[iterable: AwaitableIterable<Item>], Maybe<Predicated>>;
	<Item>(
		predicate: Filter<[item: Item]>,
	): AsyncUnary<[iterable: AwaitableIterable<Item>], Maybe<Item>>;
} = <Item>(
	predicate: Filter<[item: Item]>,
): AsyncUnary<[iterable: AwaitableIterable<Item>], Maybe<Item>> =>
async (iterable): Promise<Maybe<Item>> => {
	for await (const item of iterable) {
		if (predicate(item)) {
			return item as Maybe<Item>;
		}
	}

	return undefined;
};
