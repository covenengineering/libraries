import { EMPTY_ARRAY } from "@coven/constants";
import { intersperse, iterableToArray, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];
const commaIntersperse = intersperse(",");

Deno.test("Array returns interspersed items", () =>
	assertEquals(iterableToArray(commaIntersperse(array)), [0, ",", 1, ",", 2]),
);

Deno.test("Iterable returns interspersed items", () =>
	assertEquals(iterableToArray(commaIntersperse(range(1)(0)(2))), [
		0,
		",",
		1,
		",",
		2,
	]),
);

Deno.test("Empty array returns empty iterable", () =>
	assertEquals(iterableToArray(commaIntersperse(EMPTY_ARRAY)), EMPTY_ARRAY),
);

Deno.test("Empty iterable returns empty iterable", () =>
	assertEquals(
		iterableToArray(commaIntersperse(Iterator.from(EMPTY_ARRAY))),
		EMPTY_ARRAY,
	),
);
