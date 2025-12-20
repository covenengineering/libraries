import type {
	AsyncFilter,
	AwaitableIterable,
	Filter,
	Predicate,
} from "@coven/types";

/**
 * Evaluates items in an iterable or asynchronous iterable against a predicate
 * and returns `true` if all items evaluates to `true`.
 *
 * @example
 * ```typescript
 * const everyEven = every((number: number) => number % 2 === 0);
 * everyEven([2, 4, 6, 8]); // true
 * everyEven([1, 2, 3, 4]); // false
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const every: {
	<Item, Predicated extends Item>(
		predicate: Predicate<Item, Predicated>,
		// FIXME: Update to `Promise<iterable is Iterable<Predicated>>` when supported by TS
	): AsyncFilter<[iterable: AwaitableIterable<Item>]>;
	<Item>(
		predicate: Filter<[item: Item]>,
	): AsyncFilter<[iterable: AwaitableIterable<Item>]>;
} =
	<Item>(
		predicate: Filter<[item: Item]>,
	): AsyncFilter<[iterable: AwaitableIterable<Item>]> =>
	async (iterable) => {
		for await (const item of iterable) {
			if (!predicate(item)) {
				return false;
			}
		}

		return true;
	};
