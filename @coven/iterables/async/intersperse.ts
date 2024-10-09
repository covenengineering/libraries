import type {
	AwaitableIterable,
	AwaitableIterableIterator,
} from "@coven/types";
import { repeat } from "../repeat.ts";
import { flat } from "./flat.ts";
import { initial } from "./initial.ts";
import { zip } from "./zip.ts";

/**
 * Add the given `separator` between each element of the given iterable or
 * asynchronous iterable.
 *
 * @example
 * ```typescript
 * const intersperseComma = intersperse(",");
 * intersperseComma([1, 2, 3]); // [1, ",", 2, ",", 3]
 * ```
 * @param separator Separator to add between each element.
 * @returns Curried function with `separator` in context.
 */
export const intersperse = <Separator>(
	separator: Separator,
): (<Item>(
	iterable: AwaitableIterable<Item>,
) => AwaitableIterableIterator<Separator | Item>) => {
	const repeatSeparator = repeat(Infinity)(separator);

	return <Item>(iterable: AwaitableIterable<Item>) =>
		initial(flat(zip(iterable)(repeatSeparator)));
};
