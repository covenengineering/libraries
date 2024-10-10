import { intersperse, iterableToArray, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];
const commaIntersperse = intersperse(",");

Deno.test("an array returns interspersed items", () =>
	assertEquals(iterableToArray(commaIntersperse(array)), [0, ",", 1, ",", 2]),
);

Deno.test("an iterable returns interspersed items", () =>
	assertEquals(iterableToArray(commaIntersperse(range(1)(0)(2))), [
		0,
		",",
		1,
		",",
		2,
	]),
);

Deno.test("an empty array returns empty iterable", () =>
	assertEquals(iterableToArray(commaIntersperse([])), []),
);

Deno.test("an empty iterable returns empty iterable", () =>
	// deno-lint-ignore no-undef
	assertEquals(iterableToArray(commaIntersperse(Iterator.from([]))), []),
);
