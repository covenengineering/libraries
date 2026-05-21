import type { Numeric } from "@coven/types";
import { always } from "@coven/utils";
import { forever } from "./forever.ts";
import { take } from "./take.ts";

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
export const repeat =
	(times: Numeric): (<const Item>(item: Item) => IterableIterator<Item>) =>
	<const Item>(item: Item) =>
		take(times)(forever(always(item)));
