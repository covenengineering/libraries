import type { ReadonlyArray } from "@coven/types";

export const asyncIterateArray = async function* <Item>(
	array: ReadonlyArray<Item>,
): AsyncIterable<Awaited<Item>> {
	yield* array;
};

export const iterateArray = function* <Item>(
	array: ReadonlyArray<Item>,
): Iterable<Item> {
	yield* array;
};

export const infiniteIterable = function* <Item>(item: Item): Iterable<Item> {
	for (;;) {
		yield item;
	}
};
