import type { ReadonlyAsyncIterator } from "./ReadonlyAsyncIterator.ts";
import type { ReadonlyIterator } from "./ReadonlyIterator.ts";

/**
 * Union of {@link ReadonlyAsyncIterator} and {@link ReadonlyIterator}.
 *
 * @example
 * ```typescript
 * const iterator = [13, 42, 665] as const satisfies IsomorphicIterator<number>;
 * ```
 * @see {@link ReadonlyAsyncIterator}
 * @see {@link ReadonlyIterator}
 * @template Item Type of the items in the `ReadonlyAsyncIterator` or `ReadonlyIterator`.
 * @template Return Type of the return value in the `ReadonlyAsyncIterator` or `ReadonlyIterator`.
 * @template Next Type of the next value in the `ReadonlyAsyncIterator` or `ReadonlyIterator`.
 */
export type IsomorphicIterator<Item = unknown, Return = void, Next = void> =
	| ReadonlyAsyncIterator<Item, Return, Next>
	| ReadonlyIterator<Item, Return, Next>;
