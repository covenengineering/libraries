import { range } from "@coven/iterables";
import { iterableToArray, map } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const mapDouble = map((value: number) => value * 2);
const arrayDouble = mapDouble([0, 1, 2, 3]);

Deno.test(
	"Array of numbers and a map that doubles gets an array with all values times 2",
	async () => assertEquals(await iterableToArray(arrayDouble), [0, 2, 4, 6]),
);

Deno.test(
	"Array of doubles and a map that doubles gets an array with all values times 4",
	async () =>
		assertEquals(
			await iterableToArray(mapDouble(arrayDouble)),
			[0, 4, 8, 12],
		),
);

Deno.test(
	"Iterable of numbers and a map that doubles gets an array with all values times 2",
	async () =>
		assertEquals(
			await iterableToArray(mapDouble(range(1)(0)(3))),
			[0, 2, 4, 6],
		),
);
