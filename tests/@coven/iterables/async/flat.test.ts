import { flat, iterableToArray } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2, 3];
const arrayOfArrays = [
	[0, 1],
	[2, 3],
];
const arrayDeeper = [arrayOfArrays, arrayOfArrays];

Deno.test("an array that already is flat returns the same array", async () =>
	assertEquals(await iterableToArray(flat(array)), array),
);

Deno.test(
	"an array of arrays and a depth of 1 returns a flattened array",
	async () =>
		assertEquals(await iterableToArray(flat(arrayOfArrays)), [0, 1, 2, 3]),
);

Deno.test(
	"an array arrays of arrays and a depth of 1 returns an array of arrays",
	async () =>
		assertEquals(await iterableToArray(flat(arrayDeeper)), [
			[0, 1],
			[2, 3],
			[0, 1],
			[2, 3],
		]),
);
