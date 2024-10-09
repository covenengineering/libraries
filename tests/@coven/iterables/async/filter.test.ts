import { filter, iterableToArray, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const array = toIterable([0, 1, 2, 3]);
const nothing = (_: unknown) => false;
const filterEverything = filter(nothing);
const isEven = (item: number) => item % 2 === 0;
const filterOdds = filter(isEven);

Deno.test(
	"Array of numbers and an always false filter returns an empty array",
	async () =>
		assertEquals(await iterableToArray(filterEverything(array)), []),
);

Deno.test(
	"Array of numbers and an even number filter returns only even numbers",
	async () =>
		assertEquals(await await iterableToArray(filterOdds(array)), [0, 2]),
);
