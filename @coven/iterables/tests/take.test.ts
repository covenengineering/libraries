import { EMPTY_ARRAY } from "@coven/constants";
import { iterableToArray, take } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const infiniteIterable = function* <Item>(item: Item): Iterable<Item> {
	for (;;) {
		yield item;
	}
};
const take2 = take(2);
const takeNone = take(0);
const takeAll = take(Infinity);

Deno.test(
	"Array of numbers and a take 2 function returns array with only the first 2 elements",
	() => assertEquals(iterableToArray(take2([0, 1, 2, 3, 4])), [0, 1]),
);

Deno.test("Array of numbers and a take 0 function returns an empty array", () =>
	assertEquals(iterableToArray(takeNone([0, 1, 2, 3, 4])), EMPTY_ARRAY));

Deno.test(
	"Array of numbers and a take all function returns the whole array",
	() =>
		assertEquals(
			iterableToArray(takeAll([0, 1, 2, 3, 4])),
			[0, 1, 2, 3, 4],
		),
);

Deno.test(
	"Iterable of infinite values and a take(2) returns a 2 items without hanging",
	() => assertEquals(iterableToArray(take2(infiniteIterable(0))), [0, 0]),
);

Deno.test(
	"Iterable of infinite values and a take(0) returns a no items without hanging",
	() =>
		assertEquals(
			iterableToArray(takeNone(infiniteIterable(0))),
			EMPTY_ARRAY,
		),
);
