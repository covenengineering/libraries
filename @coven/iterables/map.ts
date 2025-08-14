import type { Unary } from "@coven/types";
import { getIterator } from "./getIterator.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Map for iterables.
 *
 * @example
 * ```typescript
 * const double = (value: number) => value * 2;
 * const mapDouble = map(double);
 *
 * mapDouble([1, 2, 3]); // [2, 4, 6]
 * ```
 * @param mapper Mapper function.
 * @returns Generator function with `mapper` function set in context.
 */
export const map = <Item, MappedItem>(
	mapper: Unary<[item: Item], MappedItem>,
): Unary<[iterable: Iterable<Item>], IterableIterator<MappedItem>> =>
(iterable: Iterable<Item>) =>
	iteratorFunctionToIterableIterator(() => getIterator(iterable).map(mapper));
