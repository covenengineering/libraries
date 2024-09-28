/**
 * Read-only `AsyncIterableIterator` with default type of items set to `unknown`.
 *
 * @example
 * ```typescript
 * const example = {
 * 	next: () => Promise.resolve({ done: false, value: "coven" } as const),
 * 	[Symbol.asyncIterator]() {
 * 		return this;
 * 	},
 * } as const satisfies ReadonlyAsyncIterableIterator<"coven">;
 * ```
 * @template Item Type of the items in the `AsyncIterableIterator`.
 */
export type ReadonlyAsyncIterableIterator<Item = unknown> = Readonly<
	AsyncIterableIterator<Item>
>;
