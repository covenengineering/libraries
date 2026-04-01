import { EMPTY_ARRAY } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { repeat } from "../../repeat.ts";
import { iterableToArray } from "../iterableToArray.ts";
import { zipIndex } from "../zipIndex.ts";

Deno.test(
	"Array with two strings returns Iterable of tuples with indexes and strings",
	async () =>
		assertEquals(await iterableToArray(zipIndex(["foo", "bar"])), [
			[0, "foo"],
			[1, "bar"],
		]),
);

Deno.test("Empty array empties iterable", async () =>
	assertEquals(await iterableToArray(zipIndex(EMPTY_ARRAY)), EMPTY_ARRAY),
);

Deno.test(
	"Iterable of strings returns Iterable of tuples with indexes and strings",
	async () =>
		assertEquals(await iterableToArray(zipIndex(repeat(2)("foo"))), [
			[0, "foo"],
			[1, "foo"],
		]),
);
