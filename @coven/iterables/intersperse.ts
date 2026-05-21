import { flat } from "./flat.ts";
import { initial } from "./initial.ts";
import { repeat } from "./repeat.ts";
import { zip } from "./zip.ts";

const repeatInfinitely = repeat(Infinity);

/**
 * Add the given `separator` between each element of the given iterable.
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
): (<Item>(iterable: Iterable<Item>) => IterableIterator<Separator | Item>) => {
	const repeatSeparator = repeatInfinitely(separator);

	return <Item>(iterable: Iterable<Item>) =>
		initial(flat(zip(iterable)(repeatSeparator)));
};
