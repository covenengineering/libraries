/**
 * Union of `AsyncIterable` and `Iterable`. This type is useful when we want to
 * accept both `AsyncIterable` and `Iterable` values, which is generally in
 * asynchronous functions that can loop over
 * [@@asyncIterator](https://coven.to/mdn/Symbol/asyncIterator) or
 * [@@iterator](https://coven.to/mdn/Symbol/iterator) values.
 *
 * @example
 * ```typescript
 * const iterable = ["✨", "🔮", "💀"] as const satisfies AwaitableIterable<string>;
 *
 * for (const item of iterable) {
 * 	console.log(item); // Works
 * }
 *
 * for await (const item of iterable) {
 * 	console.log(item); // Also works
 * }
 * ```
 * @see [@@iterator](https://coven.to/mdn/Symbol/iterator)
 * @see [@@asyncIterator](https://coven.to/mdn/Symbol/asyncIterator)
 * @template Item Type of the items in the `AwaitableIterable`.
 * @template Return Type of the return value in the `AwaitableIterable`.
 * @template Next Type of the next value in the `AwaitableIterable`.
 */
export type AwaitableIterable<
	Item = unknown,
	Return = unknown,
	Next = unknown,
> = AsyncIterable<Item, Return, Next> | Iterable<Item, Return, Next>;
