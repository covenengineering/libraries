/**
 * Union of `AsyncIterableIterator` and `IterableIterator`.
 *
 * @example
 * ```typescript
 * ["✨", "🔮", "💀"].values() satisfies AwaitableIterableIterator<string>;
 * ```
 * @template Item Type of the items in the `AwaitableIterableIterator`.
 * @template Return Type of the return value in the `AwaitableIterableIterator`.
 * @template Next Type of the next value in the `AwaitableIterableIterator`.
 */
export type AwaitableIterableIterator<
	Item = unknown,
	Return = unknown,
	Next = unknown,
> =
	| AsyncIterableIterator<Item, Return, Next>
	| IterableIterator<Item, Return, Next>;
