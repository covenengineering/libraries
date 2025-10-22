import { EMPTY_ARRAY } from "@coven/constants";
import { join } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

Deno.test("Array of numbers returns those numbers separated by spaces", () =>
	assertEquals(spaceJoin(array), "0 1 2 3"));

Deno.test("Iterable of numbers returns those numbers separated by spaces", () =>
	assertEquals(spaceJoin(Iterator.from(array)), "0 1 2 3"));

Deno.test("Empty array returns empty string", () =>
	assertEquals(spaceJoin(EMPTY_ARRAY), ""));

Deno.test("Empty iterable returns empty string", () =>
	assertEquals(spaceJoin(Iterator.from(EMPTY_ARRAY)), ""));

Deno.test("Iterable with empty strings returns spaces for each value", () =>
	assertEquals(spaceJoin(Iterator.from(["", "", ""])), "  "));

Deno.test(
	"Iterable with undefined values returns empty stringified undefined values",
	() =>
		assertEquals(
			spaceJoin(Iterator.from([undefined, undefined])),
			"undefined undefined",
		),
);
