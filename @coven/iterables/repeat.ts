import { memo } from "@coven/memo";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Repeat given item the specified amount of times (can be `BigInt` or
 * `Infinity` times) as an iterable.
 *
 * @example
 * ```typescript
 * const repeat3Times = repeat(3);
 * repeat3Times("foo"); // ["foo", "foo", "foo"]
 * ```
 * @param item Item to repeat.
 * @returns Curried function with `item` in context.
 */
export const repeat: (
	times: number,
) => <const Item>(item: Item) => IterableIterator<Item> = memo(
	(times): <const Item>(item: Item) => IterableIterator<Item> =>
	<const Item>(item: Item) =>
		iteratorFunctionToIterableIterator(function* (): Generator<Item> {
			if (times === Infinity) {
				for (;;) {
					yield item;
				}
			} else {
				for (let count = 0n; count < times; count += 1n) {
					yield item;
				}
			}
		}),
);
