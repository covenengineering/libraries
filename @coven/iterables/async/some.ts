import type { AwaitableIterable, Predicate, Unary } from "@coven/types";

/**
 * Evaluates items in an iterable or asynchronous iterable against a predicate
 * and returns `true` if any item evaluates to `true`.
 *
 * @example
 * ```typescript
 * const someEven = some((number: number) => number % 2 === 0);
 * someEven([1, 2, 3, 4]); // true
 * someEven([1, 3, 5, 7]); // false
 * ```
 * @param predicate Predicate function to evaluate each item.
 * @returns Curried function with `predicate` set in context.
 */
export const some: {
	<Item, Predicated extends Item>(
		predicate: Predicate<Item, Predicated>,
		// FIXME: Update to `Promise<iterable is Iterable<Item & Predicated>>` when supported by TS
	): (iterable: AwaitableIterable<Item>) => Promise<boolean>;
	<Item>(
		predicate: Unary<[item: Item], boolean>,
	): (iterable: AwaitableIterable<Item>) => Promise<boolean>;
} =
	<Item>(
		predicate: Unary<[item: Item], boolean>,
	): ((iterable: AwaitableIterable<Item>) => Promise<boolean>) =>
	async iterable => {
		for await (const item of iterable) {
			if (predicate(item)) {
				return true;
			}
		}

		return false;
	};
