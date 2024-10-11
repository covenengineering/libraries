import { range } from "@coven/iterables";
import { length, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

Deno.test("an array returns length", async () =>
	assertEquals(await length([0, 1, 2]), 3));

Deno.test("an iterable returns length", async () =>
	assertEquals(await length(range(1)(0)(2)), 3));

Deno.test("an empty array returns 0", async () =>
	assertEquals(await length([]), 0));

Deno.test("an empty iterable returns 0", async () =>
	assertEquals(await length(toIterable([])), 0));
