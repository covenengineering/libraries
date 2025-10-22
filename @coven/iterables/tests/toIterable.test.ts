import { iterableToArray, toIterable } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test("an array returns iterable of array", () =>
	assertEquals(iterableToArray(toIterable([0, 1, 2, 3, 4])), [
		0,
		1,
		2,
		3,
		4,
	]));

Deno.test("a string returns iterable of string", () =>
	assertEquals(typeof toIterable("test")[Symbol.iterator], "function"));

Deno.test("a number returns iterable of number", () =>
	assertEquals(iterableToArray(toIterable(1)), [1]));
