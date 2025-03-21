import { EMPTY_ARRAY } from "@coven/constants";
import { iterableToArray, repeat, zipIndex } from "@coven/iterables";
import { assertEquals } from "@std/assert";

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
