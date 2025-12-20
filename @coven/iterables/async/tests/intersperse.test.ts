import { EMPTY_ARRAY } from "@coven/constants";
import { range } from "@coven/iterables";
import {
	intersperse,
	iterableToArray,
	toIterable,
} from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const commaIntersperse = intersperse(",");

Deno.test("Array returns interspersed items", async () =>
	assertEquals(await iterableToArray(commaIntersperse([0, 1, 2])), [
		0,
		",",
		1,
		",",
		2,
	]),
);

Deno.test("Iterable returns interspersed items", async () =>
	assertEquals(await iterableToArray(commaIntersperse(range(1)(0)(2))), [
		0,
		",",
		1,
		",",
		2,
	]),
);

Deno.test("Empty array returns empty iterable", async () =>
	assertEquals(
		await iterableToArray(commaIntersperse(EMPTY_ARRAY)),
		EMPTY_ARRAY,
	),
);

Deno.test("Empty iterable returns empty iterable", async () =>
	assertEquals(
		await iterableToArray(commaIntersperse(toIterable(EMPTY_ARRAY))),
		EMPTY_ARRAY,
	),
);
