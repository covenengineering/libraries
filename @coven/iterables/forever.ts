import type { Nullary } from "@coven/types";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Generator that runs forever yielding the return type of the `yielder`
 * function every iteration.
 *
 * @example
 * ```typescript
 * import { take, iterableToArray } from "@coven/iterables";
 *
 * const countLoops = () => {
 * 	let loop = 0n;
 * 	return forever(() => (loop = loop + 1n));
 * };
 *
 * take(10n)(countLoops()); // [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n, 10n]
 * ```
 * @param yielder Function to be called forever.
 * @returns `IterableIterator` with return value of given yielder.
 */
export const forever = <Item>(yielder: Nullary<Item>): IterableIterator<Item> =>
	iteratorFunctionToIterableIterator(function* (): Generator<Item> {
		// deno-lint-ignore coven/no-for
		for (;;) {
			yield yielder();
		}
	});
