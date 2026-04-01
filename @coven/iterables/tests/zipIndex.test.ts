import { EMPTY_ARRAY } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { repeat } from "../repeat.ts";
import { zipIndex } from "../zipIndex.ts";

Deno.test(
	"Array with two strings returns Iterable of tuples with indexes and strings",
	() =>
		assertEquals(iterableToArray(zipIndex(["foo", "bar"])), [
			[0, "foo"],
			[1, "bar"],
		]),
);

Deno.test("Empty array empties iterable", () =>
	assertEquals(iterableToArray(zipIndex(EMPTY_ARRAY)), EMPTY_ARRAY),
);

Deno.test(
	"Iterable of strings returns Iterable of tuples with indexes and strings",
	() =>
		assertEquals(iterableToArray(zipIndex(repeat(2)("foo"))), [
			[0, "foo"],
			[1, "foo"],
		]),
);
