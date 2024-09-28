import type { ReadonlyIterator } from "./ReadonlyIterator.ts";

/**
 * Read-only `IterableIterator` with default type of items set to `unknown`.
 *
 * @example
 * ```typescript
 * const example = {
 * 	next: () => ({ done: false, value: "coven" }) as const,
 * 	[Symbol.iterator]() {
 * 		return this;
 * 	},
 * } as const satisfies ReadonlyIterableIterator<"coven">;
 * ```
 * @template Item Type of the items in the `IterableIterator`.
 */
export type ReadonlyIterableIterator<
	Item = unknown,
	Return = void,
	Next = void,
> = {
	readonly [Symbol.iterator]: () => ReadonlyIterableIterator<
		Item,
		Return,
		Next
	>;
} & ReadonlyIterator<Item, Return, Next>;
