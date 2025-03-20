import { every } from "@coven/iterables";
import { isNumber } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const everyNumbers = every(isNumber);
const numbersArray = [0, 1, 2, 3];
const numbersWithStringArray = [0, 1, 2, "foo", 3];

Deno.test("Array of numbers returns true", () =>
	assert(everyNumbers(numbersArray)),
);

Deno.test("Array of numbers with a string on it returns false", () =>
	assertFalse(everyNumbers(numbersWithStringArray)),
);

Deno.test("Iterable of numbers returns true", () =>
	assert(everyNumbers(Iterator.from(numbersArray))),
);

Deno.test("Iterable of numbers with a string on it returns false", () =>
	assertFalse(everyNumbers(Iterator.from(numbersWithStringArray))),
);
