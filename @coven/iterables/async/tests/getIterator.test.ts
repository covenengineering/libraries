import { getIterator } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("an array returns array's iterator", () =>
	assertEquals(getIterator(array), array[Symbol.iterator]()),
);
