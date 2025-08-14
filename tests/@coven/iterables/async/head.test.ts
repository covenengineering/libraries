import { EMPTY_ARRAY } from "@coven/constants";
import { range } from "@coven/iterables";
import { drop, head } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("Array returns array first element", async () =>
	assertEquals(await head(array), 0));

Deno.test("Iterable returns iterable's first element", async () =>
	assertEquals(await head(range(1)(0)(2)), 0));

Deno.test("Empty array returns undefined", async () =>
	assertEquals(await head(EMPTY_ARRAY), undefined));

Deno.test("Empty iterable returns undefined", async () =>
	assertEquals(await head(drop(Infinity)(array)), undefined));
