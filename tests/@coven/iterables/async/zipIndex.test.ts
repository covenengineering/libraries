import { repeat } from "@coven/iterables";
import { iterableToArray, zipIndex } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

Deno.test(
	"an array with two strings returns Iterable of tuples with indexes and strings",
	async () =>
		assertEquals(await iterableToArray(zipIndex(["foo", "bar"])), [
			[0, "foo"],
			[1, "bar"],
		]),
);

Deno.test("an empty array empties iterable", async () =>
	assertEquals(await iterableToArray(zipIndex([])), []));

Deno.test(
	"an iterable of strings returns Iterable of tuples with indexes and strings",
	async () =>
		assertEquals(await iterableToArray(zipIndex(repeat(2)("foo"))), [
			[0, "foo"],
			[1, "foo"],
		]),
);
