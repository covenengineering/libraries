import { some, toIterable } from "@coven/iterables/async";
import { isNumber } from "@coven/predicates";
import { assertEquals } from "@std/assert";

const someNumber = some(isNumber);

Deno.test("an array of numbers returns true", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await someNumber([0, 1, 2, 3]), true));

Deno.test("an array of numbers with a string on it returns true", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await someNumber([0, 1, 2, "foo", 3]), true));

Deno.test("an array of strings returns false", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await someNumber(["foo", "bar"]), false));

Deno.test("an iterable of numbers returns true", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await someNumber(toIterable([0, 1, 2, 3])), true));

Deno.test("an iterable of numbers with a string on it returns true", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await someNumber(toIterable([0, 1, 2, "foo", 3])), true));

Deno.test("an iterable of strings returns false", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await someNumber(toIterable(["foo", "bar"])), false));
