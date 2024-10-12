import { EMPTY_ARRAY } from "@coven/constants";
import { iterableToArray, repeat, zipIndex } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test(
	"an array with two strings returns Iterable of tuples with indexes and strings",
	() =>
		assertEquals(iterableToArray(zipIndex(["foo", "bar"])), [
			[0, "foo"],
			[1, "bar"],
		]),
);

Deno.test("an empty array empties iterable", () =>
	assertEquals(iterableToArray(zipIndex(EMPTY_ARRAY)), EMPTY_ARRAY));

Deno.test(
	"an iterable of strings returns Iterable of tuples with indexes and strings",
	() =>
		assertEquals(iterableToArray(zipIndex(repeat(2)("foo"))), [
			[0, "foo"],
			[1, "foo"],
		]),
);
