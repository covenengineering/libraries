import { some } from "@coven/iterables";
import { isNumber } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const someNumber = some(isNumber);

Deno.test("Array of numbers returns true", () =>
	assert(someNumber([0, 1, 2, 3])),
);

Deno.test("Array of numbers with a string on it returns true", () =>
	assert(someNumber([0, 1, 2, "foo", 3])),
);

Deno.test("Array of strings returns false", () =>
	assertFalse(someNumber(["foo", "bar"])),
);

Deno.test("Iterable of numbers returns true", () =>
	assert(someNumber(Iterator.from([0, 1, 2, 3]))),
);

Deno.test("Iterable of numbers with a string on it returns true", () =>
	assert(someNumber(Iterator.from([0, 1, 2, "foo", 3]))),
);

Deno.test("Iterable of strings returns false", () =>
	assertFalse(someNumber(Iterator.from(["foo", "bar"]))),
);
