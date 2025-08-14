import { EMPTY_ARRAY } from "@coven/constants";
import { range } from "@coven/iterables";
import { length, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

Deno.test("Array returns length", async () =>
	assertEquals(await length([0, 1, 2]), 3));

Deno.test("Iterable returns length", async () =>
	assertEquals(await length(range(1)(0)(2)), 3));

Deno.test("Empty array returns 0", async () =>
	assertEquals(await length(EMPTY_ARRAY), 0));

Deno.test("Empty iterable returns 0", async () =>
	assertEquals(await length(toIterable(EMPTY_ARRAY)), 0));
