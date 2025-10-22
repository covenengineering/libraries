import { EMPTY_ARRAY } from "@coven/constants";
import { drop, initial, iterableToArray, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("Array returns initial items", () =>
	assertEquals(iterableToArray(initial(array)), [0, 1]));

Deno.test("Iterable returns initial items", () =>
	assertEquals(iterableToArray(initial(range(1)(0)(2))), [0, 1]));

Deno.test("Empty array returns empty array", () =>
	assertEquals(iterableToArray(initial(EMPTY_ARRAY)), EMPTY_ARRAY));

Deno.test("Empty iterable returns empty array", () =>
	assertEquals(iterableToArray(initial(drop(Infinity)(array))), EMPTY_ARRAY));
