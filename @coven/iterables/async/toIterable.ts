import { isAwaitableIterable } from "@coven/predicates";
import type { AwaitableIterable, IterableItem } from "@coven/types";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Takes a value, iterable or asynchronous iterable and yields it.
 *
 * @example
 * ```typescript
 * const iterable = toIterable(1);
 * const iterator = getIterator(iterable);
 * iterator.next(); // { value: 1, done: false }
 * iterator.next(); // { value: undefined, done: true }
 * ```
 * @see {@link iteratorFunctionToAsyncIterableIterator}
 *
 * @template ValueOrIterable Generic of value or iterable to yield.
 * @param valueOrIterable Vale or iterable to yield.
 * @returns Yielded item or iterable.
 */
export const toIterable = <const ValueOrAsyncIterable>(
	valueOrIterable: ValueOrAsyncIterable,
): AsyncIterableIterator<
	ValueOrAsyncIterable extends AwaitableIterable ?
		IterableItem<ValueOrAsyncIterable>
	:	ValueOrAsyncIterable
> =>
	iteratorFunctionToAsyncIterableIterator(async function* (): AsyncGenerator {
		isAwaitableIterable(valueOrIterable) ?
			yield* valueOrIterable
		:	yield valueOrIterable;
	} as () => AsyncGenerator<
		ValueOrAsyncIterable extends AwaitableIterable ?
			IterableItem<ValueOrAsyncIterable>
		:	ValueOrAsyncIterable
	>);
