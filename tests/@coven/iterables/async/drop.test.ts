import { drop, iterableToArray, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const drop2 = drop(2);
const dropNone = drop(0);
const dropAll = drop(Infinity);

Deno.test(
	"Iterable of numbers and a drop 2 function returns iterable without the first 2 elements",
	async () =>
		assertEquals(
			await iterableToArray(drop2(toIterable([0, 1, 2, 3, 4]))),
			[2, 3, 4],
		),
);

Deno.test(
	"Iterable of numbers and a drop 0 function returns iterable with all its elements",
	async () =>
		assertEquals(
			await iterableToArray(dropNone(toIterable([0, 1, 2, 3, 4]))),
			[0, 1, 2, 3, 4],
		),
);

Deno.test(
	"Iterable of numbers and a drop all function returns empty iterable",
	async () =>
		assertEquals(
			await iterableToArray(dropAll(toIterable([0, 1, 2, 3, 4]))),
			[],
		),
);
