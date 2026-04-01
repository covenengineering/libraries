import { EMPTY_ARRAY } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { drop } from "../drop.ts";
import { iterableToArray } from "../iterableToArray.ts";

const drop2 = drop(2);
const dropNone = drop(0);
const dropAll = drop(Infinity);

Deno.test(
	"Iterable of numbers and a drop 2 function returns iterable without the first 2 elements",
	() => assertEquals(iterableToArray(drop2([0, 1, 2, 3, 4])), [2, 3, 4]),
);

Deno.test(
	"Iterable of numbers and a drop 0 function returns iterable with all its elements",
	() =>
		assertEquals(
			iterableToArray(dropNone([0, 1, 2, 3, 4])),
			[0, 1, 2, 3, 4],
		),
);

Deno.test(
	"Iterable of numbers and a drop all function returns empty iterable",
	() => assertEquals(iterableToArray(dropAll([0, 1, 2, 3, 4])), EMPTY_ARRAY),
);
