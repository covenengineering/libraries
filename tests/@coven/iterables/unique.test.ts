import { iterableToArray, unique } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2, 3, 4];

Deno.test(
	"an array with duplicated elements returns same array without duplicated elements",
	() => assertEquals(iterableToArray(unique([...array, ...array])), array),
);

Deno.test("an array without duplicated elements returns same array", () =>
	assertEquals(iterableToArray(unique(array)), array));

Deno.test("an empty array returns same array", () =>
	assertEquals(iterableToArray(unique([])), []));
