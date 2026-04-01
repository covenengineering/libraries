import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { toIterable } from "../toIterable.ts";

Deno.test("an array returns iterable of array", async () =>
	assertEquals(await iterableToArray([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]),
);

Deno.test("a string returns iterable of string", () =>
	assertEquals(typeof toIterable("test")[Symbol.asyncIterator], "function"),
);

Deno.test("a number returns iterable of number", async () =>
	assertEquals(await iterableToArray(toIterable(1)), [1]),
);
