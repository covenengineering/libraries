/**
 * Union of `AsyncIterator` and `Iterator`.
 *
 * @example
 * ```typescript
 * const iterator = [13, 42, 665].values() satisfies AwaitableIterator<number>;
 * ```
 * @template Item Type of the items in the `AwaitableIterator`.
 * @template Return Type of the return value in the `AwaitableIterator`.
 * @template Next Type of the next value in the `AwaitableIterator`.
 */
export type AwaitableIterator<
	Item = unknown,
	Return = unknown,
	Next = unknown,
> = AsyncIterator<Item, Return, Next> | Iterator<Item, Return, Next>;
