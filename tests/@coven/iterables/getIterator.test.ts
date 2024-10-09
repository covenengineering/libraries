import { getIterator } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2] as const;

Deno.test("an array returns array's iterator", () =>
	assertEquals(getIterator(array), array[Symbol.iterator]()),
);
