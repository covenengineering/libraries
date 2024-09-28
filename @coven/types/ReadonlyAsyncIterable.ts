/**
 * Read-only `AsyncIterable` with default type of items set to `unknown`.
 *
 * @example
 * ```typescript
 * const example = {
 * 	[Symbol.asyncIterator]: () => ({
 * 		next: () => Promise.resolve({ done: false, value: "coven" } as const),
 * 	}),
 * } as const satisfies ReadonlyAsyncIterable<"coven">;
 * ```
 * @template Item Type of the items in the `AsyncIterable`.
 */
export type ReadonlyAsyncIterable<Item = unknown> = Readonly<
	AsyncIterable<Item>
>;
