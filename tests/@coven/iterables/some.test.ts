import { some } from "@coven/iterables";
import { isNumber } from "@coven/predicates";
import { assertEquals } from "@std/assert";
import { iterateArray } from "./utils.ts";

const someNumber = some(isNumber);

Deno.test("an array of numbers returns true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(someNumber([0, 1, 2, 3]), true),
);

Deno.test("an array of numbers with a string on it returns true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(someNumber([0, 1, 2, "foo", 3]), true),
);

Deno.test("an array of strings returns false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(someNumber(["foo", "bar"]), false),
);

Deno.test("an iterable of numbers returns true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(someNumber(iterateArray([0, 1, 2, 3])), true),
);

Deno.test("an iterable of numbers with a string on it returns true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(someNumber(iterateArray([0, 1, 2, "foo", 3])), true),
);

Deno.test("an iterable of strings returns false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(someNumber(iterateArray(["foo", "bar"])), false),
);
