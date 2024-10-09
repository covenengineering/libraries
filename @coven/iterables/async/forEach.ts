import type { Awaitable, AwaitableIterable, Unary } from "@coven/types";

/**
 * For each function for iterables and asynchronous iterables.
 *
 * @example
 * ```typescript
 * const logEach = forEach(console.log);
 *
 * logEach([1, 2, 3]); // Logs 1, 2 and 3 separately
 * ```
 * @param callback Function to be called for every item of the iterable.
 * @returns Curried function that expects an iterable to loop over and has `callback` set in context.
 */
export const forEach =
	<Item>(
		callback: Unary<[item: Item], Awaitable<void>>,
	): ((iterable: AwaitableIterable<Item>) => Promise<void>) =>
	async (iterable: AwaitableIterable<Item>) => {
		for await (const item of iterable) {
			await callback(item);
		}
	};
