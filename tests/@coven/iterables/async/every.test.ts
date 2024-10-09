import { every, toIterable } from "@coven/iterables/async";
import { isNumber } from "@coven/predicates";
import { assertEquals } from "@std/assert";

const everyNumbers = every(isNumber);
const numbersArray = [0, 1, 2, 3];
const numbersWithStringArray = [0, 1, 2, "foo", 3];

Deno.test("Array of numbers returns true", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await everyNumbers(numbersArray), true),
);

Deno.test("Array of numbers with a string on it returns false", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await everyNumbers(numbersWithStringArray), false),
);

Deno.test("Iterable of numbers returns true", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await everyNumbers(toIterable(numbersArray)), true),
);

Deno.test("Iterable of numbers with a string on it returns false", async () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(await everyNumbers(toIterable(numbersWithStringArray)), false),
);
