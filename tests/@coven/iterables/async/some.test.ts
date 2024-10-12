import { some, toIterable } from "@coven/iterables/async";
import { isNumber } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const someNumber = some(isNumber);

Deno.test("Array of numbers returns true", async () =>
	assert(await someNumber([0, 1, 2, 3])));

Deno.test("Array of numbers with a string on it returns true", async () =>
	assert(await someNumber([0, 1, 2, "foo", 3])));

Deno.test("Array of strings returns false", async () =>
	assertFalse(await someNumber(["foo", "bar"])));

Deno.test("Iterable of numbers returns true", async () =>
	assert(await someNumber(toIterable([0, 1, 2, 3]))));

Deno.test("Iterable of numbers with a string on it returns true", async () =>
	assert(await someNumber(toIterable([0, 1, 2, "foo", 3]))));

Deno.test("Iterable of strings returns false", async () =>
	assertFalse(await someNumber(toIterable(["foo", "bar"]))));
