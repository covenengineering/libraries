import type { ReadonlyIterator } from "./ReadonlyIterator.ts";

/**
 * Read-only `Iterable` with default type of items set to `unknown`.
 *
 * @example
 * ```typescript
 * const test1 = [13, 42, 665] as const satisfies ReadonlyIterable<number>; // ok
 * const test2 = ["🧙‍♀️", "🔮", "💀"] as const satisfies ReadonlyIterable<number>; // error
 * ```
 * @template Item Type of the items in the `Iterable`.
 * @template Return Type of the return value in the `Iterable`.
 * @template Next Type of the next value in the `Iterable`.
 */
export type ReadonlyIterable<Item = unknown, Return = void, Next = void> = {
	readonly [Symbol.iterator]: () => ReadonlyIterator<Item, Return, Next>;
};
