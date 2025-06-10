import type {
	AwaitableIterable,
	Head,
	IterableItem,
	Maybe,
} from "@coven/types";
import { getIterator } from "./getIterator.ts";

/**
 * Get first element of an iterable or asynchronous iterable (`undefined` if
 * it is empty).
 *
 * @example
 * ```typescript
 * head([1, 2, 3]); // 1
 * ```
 * @param iterable Iterable to get the first element from.
 * @returns First element of the iterable (`undefined` if empty).
 */
export const head = <const Iterable extends AwaitableIterable>(
	iterable: Iterable,
): Promise<
	Iterable extends ReadonlyArray<unknown> ? Head<Iterable>
	:	Maybe<IterableItem<Iterable>>
> =>
	Promise.resolve(getIterator(iterable).next()).then(
		({ value }) =>
			value as Iterable extends ReadonlyArray<unknown> ? Head<Iterable>
			:	Maybe<IterableItem<Iterable>>,
	);
