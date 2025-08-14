import type { Initial, IterableItem } from "@coven/types";
import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Get all elements except the last one of an iterable.
 *
 * @example
 * ```typescript
 * initial([1, 2, 3]); // [1, 2]
 * ```
 * @param iterable Iterable to get the items from.
 * @returns Iterable with all items except the last one.
 */
export const initial = <IterableToGetInitial extends Iterable<unknown>>(
	iterable: IterableToGetInitial,
): IterableIterator<
	IterableToGetInitial extends ReadonlyArray<unknown>
		? Initial<IterableToGetInitial> extends ReadonlyArray<unknown>
			? Initial<IterableToGetInitial>[number]
		: IterableItem<IterableToGetInitial>
		: IterableItem<IterableToGetInitial>
> => iteratorFunctionToIterableIterator(function* (): Generator {
	const iterator = getIterator(iterable);

	let item = iterator.next();

	for (; !item.done;) {
		const value = item.value;

		item = iterator.next();

		item.done ? undefined : yield value;
	}
}) as IterableIterator<
	IterableToGetInitial extends ReadonlyArray<unknown>
		? Initial<IterableToGetInitial> extends ReadonlyArray<unknown>
			? Initial<IterableToGetInitial>[number]
		: IterableItem<IterableToGetInitial>
		: IterableItem<IterableToGetInitial>
>;
