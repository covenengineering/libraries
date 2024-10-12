import { EMPTY_ARRAY } from "@coven/constants";
import { range } from "@coven/iterables";
import { drop, initial, iterableToArray } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("an array returns initial items", async () =>
	assertEquals(await iterableToArray(initial(array)), [0, 1]));

Deno.test("an iterable returns initial items", async () =>
	assertEquals(await iterableToArray(initial(range(1)(0)(2))), [0, 1]));

Deno.test("an empty array returns empty array", async () =>
	assertEquals(await iterableToArray(initial(EMPTY_ARRAY)), EMPTY_ARRAY));

Deno.test("an empty iterable returns empty array", async () =>
	assertEquals(
		await iterableToArray(initial(drop(Infinity)(array))),
		EMPTY_ARRAY,
	));
