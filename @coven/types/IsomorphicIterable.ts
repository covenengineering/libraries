import type { ReadonlyAsyncIterable } from "./ReadonlyAsyncIterable.ts";
import type { ReadonlyIterable } from "./ReadonlyIterable.ts";

/**
 * Union of {@link ReadonlyAsyncIterable} and {@link ReadonlyIterable}. This
 * type is useful when we want to accept both {@link ReadonlyAsyncIterable} and
 * {@link ReadonlyIterable} values, which is generally in asynchronous functions
 * that can loop over [@@asyncIterator](https://mdn.io/Symbol.asyncIterator) or
 * [@@iterator](https://mdn.io/Symbol.iterator) values.
 *
 * @example
 * ```typescript
 * const iterable = [13, 42, 665] as const satisfies IsomorphicIterable<number>;
 *
 * for (const item of iterable) {
 * 	console.log(item); // Works
 * }
 *
 * for await (const item of iterable) {
 * 	console.log(item); // Also works
 * }
 * ```
 * @see {@link ReadonlyAsyncIterable}
 * @see {@link ReadonlyIterable}
 * @see [@@iterator](https://mdn.io/Symbol.iterator)
 * @see [@@asyncIterator](https://mdn.io/Symbol.asyncIterator)
 *
 * @template Item Type of the items in the iterable.
 */
export type IsomorphicIterable<Item = unknown> =
	| ReadonlyAsyncIterable<Item>
	| ReadonlyIterable<Item>;
