import { append, iterableToArray, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const numbersArray = [13, 42] as const;
const stringsArray = ["🧙🏻‍♀️", "🎃"] as const;
const appendNumbers = append<(typeof numbersArray)[number]>(numbersArray);

Deno.test(
	"Array of numbers an array of strings returns arrays concatenated",
	async () =>
		assertEquals(await iterableToArray(appendNumbers(stringsArray)), [
			...stringsArray,
			...numbersArray,
		]),
);

Deno.test(
	"Array of numbers (appended twice) an array of strings returns arrays concatenated",
	async () =>
		assertEquals(
			await iterableToArray(appendNumbers(appendNumbers(stringsArray))),
			[...stringsArray, ...numbersArray, ...numbersArray],
		),
);

Deno.test(
	"Array of numbers an iterable of strings returns both arrays concatenated",
	async () =>
		assertEquals(
			await iterableToArray(appendNumbers(toIterable(stringsArray))),
			[...stringsArray, ...numbersArray],
		),
);
