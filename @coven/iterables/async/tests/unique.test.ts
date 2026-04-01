import { EMPTY_ARRAY } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { unique } from "../unique.ts";

const array = [0, 1, 2, 3, 4];

Deno.test(
	"an array with duplicated elements returns same array without duplicated elements",
	async () =>
		assertEquals(
			await iterableToArray(unique([...array, ...array])),
			array,
		),
);

Deno.test("an array without duplicated elements returns same array", async () =>
	assertEquals(await iterableToArray(unique(array)), array),
);

Deno.test("an empty array returns same array", async () =>
	assertEquals(await iterableToArray(unique(EMPTY_ARRAY)), EMPTY_ARRAY),
);
