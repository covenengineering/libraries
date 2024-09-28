/**
 * Read-only `AsyncIterator` with default type of items set to `unknown`, and
 * the return and next types set to `void`.
 *
 * @example
 * ```typescript
 * const example = {
 * 	next: () => Promise.resolve({ done: false, value: "coven" } as const),
 * } as const satisfies ReadonlyAsyncIterator<"coven">;
 * ```
 * @template Item Type of the items in the `AsyncIterator`.
 * @template Return Type of the return value in the `AsyncIterator`.
 * @template Next Type of the next value in the `AsyncIterator`.
 */
export type ReadonlyAsyncIterator<
	Item = unknown,
	Return = void,
	Next = void,
> = Readonly<AsyncIterator<Item, Return, Next>>;
