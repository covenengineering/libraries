import { flat, iterableToArray } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2, 3];
const arrayOfArrays = [
	[0, 1],
	[2, 3],
];
const arrayDeeper = [arrayOfArrays, arrayOfArrays];

Deno.test("an array that already is flat returns the same array", () =>
	assertEquals(iterableToArray(flat(array)), array));

Deno.test("an array of arrays and a depth of 1 returns a flattened array", () =>
	assertEquals(iterableToArray(flat(arrayOfArrays)), [0, 1, 2, 3]));

Deno.test(
	"an array arrays of arrays and a depth of 1 returns an array of arrays",
	() =>
		assertEquals(iterableToArray(flat(arrayDeeper)), [
			[0, 1],
			[2, 3],
			[0, 1],
			[2, 3],
		]),
);
