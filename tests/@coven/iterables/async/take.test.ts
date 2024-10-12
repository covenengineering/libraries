import { EMPTY_ARRAY } from "@coven/constants";
import { repeat } from "@coven/iterables";
import { iterableToArray, take } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const take2 = take(2);
const takeNone = take(0);
const takeAll = take(Infinity);
const repeatZeroForever = repeat(Infinity)(0);

Deno.test(
	"an array of numbers and a take 2 function returns array with only the first 2 elements",
	async () =>
		assertEquals(await iterableToArray(take2([0, 1, 2, 3, 4])), [0, 1]),
);

Deno.test(
	"an array of numbers and a take 0 function returns an empty array",
	async () =>
		assertEquals(
			await iterableToArray(takeNone([0, 1, 2, 3, 4])),
			EMPTY_ARRAY,
		),
);

Deno.test(
	"an array of numbers and a take all function returns the whole array",
	async () =>
		assertEquals(
			await iterableToArray(takeAll([0, 1, 2, 3, 4])),
			[0, 1, 2, 3, 4],
		),
);

Deno.test(
	"an iterable of infinite values and a take(2) returns a 2 items without hanging",
	async () =>
		assertEquals(await iterableToArray(take2(repeatZeroForever)), [0, 0]),
);

Deno.test(
	"an iterable of infinite values and a take(0) returns a no items without hanging",
	async () =>
		assertEquals(
			await iterableToArray(takeNone(repeatZeroForever)),
			EMPTY_ARRAY,
		),
);
