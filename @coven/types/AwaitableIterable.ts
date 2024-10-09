/**
 * Union of `AsyncIterable` and `Iterable`. This type is useful when we want to
 * accept both `AsyncIterable` and `Iterable` values, which is generally in
 * asynchronous functions that can loop over
 * [@@asyncIterator](https://mdn.io/Symbol.asyncIterator) or
 * [@@iterator](https://mdn.io/Symbol.iterator) values.
 *
 * @example
 * ```typescript
 * const iterable = [13, 42, 665] as const satisfies AwaitableIterable<number>;
 *
 * for (const item of iterable) {
 * 	console.log(item); // Works
 * }
 *
 * for await (const item of iterable) {
 * 	console.log(item); // Also works
 * }
 * ```
 * @see [@@iterator](https://mdn.io/Symbol.iterator)
 * @see [@@asyncIterator](https://mdn.io/Symbol.asyncIterator)
 * @template Item Type of the items in the `AwaitableIterable`.
 * @template Return Type of the return value in the `AwaitableIterable`.
 * @template Next Type of the next value in the `AwaitableIterable`.
 */
export type AwaitableIterable<
	Item = unknown,
	Return = unknown,
	Next = unknown,
> = AsyncIterable<Item, Return, Next> | Iterable<Item, Return, Next>;
