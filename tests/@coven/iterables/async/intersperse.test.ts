import { range } from "@coven/iterables";
import {
	intersperse,
	iterableToArray,
	toIterable,
} from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const commaIntersperse = intersperse(",");

Deno.test("an array returns interspersed items", async () =>
	assertEquals(await iterableToArray(commaIntersperse([0, 1, 2])), [
		0,
		",",
		1,
		",",
		2,
	]),
);

Deno.test("an iterable returns interspersed items", async () =>
	assertEquals(await iterableToArray(commaIntersperse(range(1)(0)(2))), [
		0,
		",",
		1,
		",",
		2,
	]),
);

Deno.test("an empty array returns empty iterable", async () =>
	assertEquals(await iterableToArray(commaIntersperse([])), []),
);

Deno.test("an empty iterable returns empty iterable", async () =>
	assertEquals(await iterableToArray(commaIntersperse(toIterable([]))), []),
);
