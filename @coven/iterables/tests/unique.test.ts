import { EMPTY_ARRAY } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { unique } from "../unique.ts";

const array = [0, 1, 2, 3, 4];

Deno.test(
	"an array with duplicated elements returns same array without duplicated elements",
	() => assertEquals(iterableToArray(unique([...array, ...array])), array),
);

Deno.test("an array without duplicated elements returns same array", () =>
	assertEquals(iterableToArray(unique(array)), array),
);

Deno.test("an empty array returns same array", () =>
	assertEquals(iterableToArray(unique(EMPTY_ARRAY)), EMPTY_ARRAY),
);
