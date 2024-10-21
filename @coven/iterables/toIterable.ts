import { isIterable } from "@coven/predicates";
import type { AwaitableIterable, IterableItem } from "@coven/types";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Takes a value, iterable and yields it.
 *
 * @example
 * ```typescript
 * import { getIterator } from "@coven/iterables";
 *
 * const iterable = toIterable(1);
 * const iterator = getIterator(iterable);
 * iterator.next(); // { value: 1, done: false }
 * iterator.next(); // { value: undefined, done: true }
 * ```
 * @see {@linkcode iteratorFunctionToIterableIterator}
 *
 * @template ValueOrIterable Generic of value or iterable to yield.
 * @param valueOrIterable Vale or iterable to yield.
 * @returns Yielded item or iterable.
 */
export const toIterable = <const ValueOrIterable>(
	valueOrIterable: ValueOrIterable,
): IterableIterator<
	ValueOrIterable extends AwaitableIterable ? IterableItem<ValueOrIterable>
		: ValueOrIterable
> => iteratorFunctionToIterableIterator(
	function* (): Generator {
		isIterable(valueOrIterable)
			? yield* valueOrIterable
			: yield valueOrIterable;
	} as () => Generator<
		ValueOrIterable extends AwaitableIterable
			? IterableItem<ValueOrIterable>
			: ValueOrIterable
	>,
);
