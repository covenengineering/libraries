import { EMPTY_ARRAY } from "@coven/constants";
import { filter, iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2, 3];
const nothing = (_: unknown) => false;
const filterEverything = filter(nothing);
const isEven = (item: number) => item % 2 === 0;
const filterOdds = filter(isEven);

Deno.test(
	"an array of numbers and an always false filter returns an empty array",
	() => assertEquals(iterableToArray(filterEverything(array)), EMPTY_ARRAY),
);

Deno.test(
	"an array of numbers and an even number filter returns only even numbers",
	() => assertEquals(iterableToArray(filterOdds(array)), [0, 2]),
);

Deno.test(
	"an async array of numbers and an always false filter returns an empty iterable",
	() => assertEquals(iterableToArray(filterEverything(array)), EMPTY_ARRAY),
);

Deno.test(
	"an async array of numbers and an even number filter returns only even numbers",
	() => assertEquals(iterableToArray(filterOdds(array)), [0, 2]),
);
