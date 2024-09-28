import type { ReadonlyAsyncIterableIterator } from "./ReadonlyAsyncIterableIterator.ts";
import type { ReadonlyIterableIterator } from "./ReadonlyIterableIterator.ts";

/**
 * Union of {@link ReadonlyAsyncIterableIterator} and
 * {@link ReadonlyIterableIterator}.
 *
 * @example
 * ```typescript
 * [13, 42, 665].values() satisfies IsomorphicIterableIterator<number>;
 * ```
 * @see {@link ReadonlyAsyncIterableIterator}
 * @see {@link ReadonlyIterableIterator}
 * @template Item Type of the items in the `ReadonlyAsyncIterableIterator` `ReadonlyIterableIterator`.
 */
export type IsomorphicIterableIterator<Item = unknown> =
	| ReadonlyAsyncIterableIterator<Item>
	| ReadonlyIterableIterator<Item>;
