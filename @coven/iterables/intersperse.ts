import { flat } from "./flat.ts";
import { initial } from "./initial.ts";
import { repeat } from "./repeat.ts";
import { zip } from "./zip.ts";

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
): <Item>(iterable: Iterable<Item>) => IterableIterator<Separator | Item> => {
	const repeatSeparator = repeat(Infinity)(separator);

	return <Item>(iterable: Iterable<Item>) => {
		const zipped = zip(iterable)(repeatSeparator);
		const flattened = flat(zipped);
		const initialVal = initial(flattened);
		return initialVal;
	};
};
