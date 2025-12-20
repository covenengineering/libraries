import type { Head, IterableItem, Maybe } from "@coven/types";
import { getIterator } from "./getIterator.ts";

/**
 * Get first element of an iterable (`undefined` if it is empty).
 *
 * @example
 * ```typescript
 * head([1, 2, 3]); // 1
 * ```
 * @param iterable Iterable to get the first element from.
 * @returns First element of the iterable (`undefined` if empty).
 */
export const head = <IterableToGetHead extends Iterable<unknown>>(
	iterable: IterableToGetHead,
): IterableToGetHead extends ReadonlyArray<unknown> ? Head<IterableToGetHead>
:	Maybe<IterableItem<IterableToGetHead>> =>
	getIterator(iterable).next().value as IterableToGetHead extends (
		ReadonlyArray<unknown>
	) ?
		Head<IterableToGetHead>
	:	Maybe<IterableItem<IterableToGetHead>>;
