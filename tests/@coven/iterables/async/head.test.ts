import { range } from "@coven/iterables";
import { drop, head } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("an array returns array first element", async () =>
	assertEquals(await head(array), 0));

Deno.test("an iterable returns iterable's first element", async () =>
	assertEquals(await head(range(1)(0)(2)), 0));

Deno.test("an empty array returns undefined", async () =>
	assertEquals(await head([]), undefined));

Deno.test("an empty iterable returns undefined", async () =>
	assertEquals(await head(drop(Infinity)(array)), undefined));
