import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import type { Maybe, ReadonlyRecord, Unary } from "@coven/types";
import { set } from "@coven/utils";
import { reduce } from "./reduce.ts";

/**
 * Groups values of an iterable in an object based on the output of the
 * `grouper` function.
 *
 * @example
 * ```typescript
 * const groupByType = groupBy((value: number) => value % 2 === 0 ? "even" : "odd");
 * groupByType([1, 2, 3, 4, 5]); // { even: [2, 4], odd: [1, 3, 5] }
 * ```
 * @param grouper Grouper function.
 * @returns Object with grouped values.
 */
export const groupBy = <Item, Key extends PropertyKey>(
	grouper: Unary<[item: Item], Key>,
): Unary<
	[iterable: Iterable<Item>],
	Readonly<Record<Key, ReadonlyArray<Item>>>
> =>
	reduce((item: Item) => {
		const group = grouper(item);

		return ((groups: ReadonlyRecord<Key, Maybe<ReadonlyArray<Item>>>) =>
			set(group)([...(groups[group] ?? EMPTY_ARRAY), item])(groups)) as (
			groups: ReadonlyRecord<Key, Maybe<ReadonlyArray<Item>>>,
		) => ReadonlyRecord<Key, ReadonlyArray<Item>>;
	})(EMPTY_OBJECT as ReadonlyRecord<Key, ReadonlyArray<Item>>);
