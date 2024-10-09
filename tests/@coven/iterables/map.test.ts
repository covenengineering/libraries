import { iterableToArray, map, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2, 3];
const mapDouble = map((value: number) => value * 2);
const arrayDouble = mapDouble(array);

Deno.test(
	"an array of numbers and a map that doubles gets an array with all values times 2",
	() => assertEquals(iterableToArray(arrayDouble), [0, 2, 4, 6]),
);

Deno.test(
	"an array of doubles and a map that doubles gets an array with all values times 4",
	() => assertEquals(iterableToArray(mapDouble(arrayDouble)), [0, 4, 8, 12]),
);

Deno.test(
	"an iterable of numbers and a map that doubles gets an array with all values times 2",
	() =>
		assertEquals(iterableToArray(mapDouble(range(1)(0)(3))), [0, 2, 4, 6]),
);
