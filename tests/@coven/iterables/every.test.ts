import { every } from "@coven/iterables";
import { isNumber } from "@coven/predicates";
import { assertEquals } from "@std/assert";
import { iterateArray } from "./utils.ts";

const everyNumbers = every(isNumber);
const numbersArray = [0, 1, 2, 3];
const numbersWithStringArray = [0, 1, 2, "foo", 3];

Deno.test("an array of numbers returns true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(everyNumbers(numbersArray), true),
);

Deno.test("an array of numbers with a string on it returns false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(everyNumbers(numbersWithStringArray), false),
);

Deno.test("an iterable of numbers returns true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(everyNumbers(iterateArray(numbersArray)), true),
);

Deno.test("an iterable of numbers with a string on it returns false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(everyNumbers(iterateArray(numbersWithStringArray)), false),
);
