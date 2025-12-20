import type { AwaitableIterable, Stringable } from "@coven/types";
import { reduce } from "./reduce.ts";

/**
 * Takes a `separator` string and a iterable or asynchronous iterable and
 * returns a string with the concatenation of all the elements separated by the
 * `separator`.
 *
 * @example
 * ```typescript
 * const joinWithSpaces = join(" ");
 * joinWithSpaces([1, 2, 3]); // "1 2 3"
 * ```
 * @param separator String to use as separator.
 * @returns Curried function with `separator` in context.
 */
export const join =
	<Separator extends string>(
		separator: Separator,
	): (<Item extends Stringable>(
		iterable: AwaitableIterable<Item>,
	) => Promise<`${string}${Separator}${string}`>) =>
	<Item extends Stringable>(iterable: AwaitableIterable<Item>) => {
		let first = true;

		return reduce<Stringable, string>(
			(item) => (string) =>
				first ?
					((first = false), `${item}`)
				:	`${string}${separator}${item}`,
		)("")(iterable) as Promise<`${string}${Separator}${string}`>;
	};
