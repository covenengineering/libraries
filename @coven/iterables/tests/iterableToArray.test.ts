import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { range } from "../range.ts";

Deno.test("a string returns an array with every letter of that string", () =>
	assertEquals(iterableToArray("Witch"), [..."Witch"]),
);

Deno.test("an array returns that same array", () =>
	assertEquals(iterableToArray(["Coven", "Engineering"]), [
		"Coven",
		"Engineering",
	]),
);

Deno.test("a generator returns an array with generated values", () =>
	assertEquals(
		iterableToArray(range(1)(0)(10)),
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	),
);
