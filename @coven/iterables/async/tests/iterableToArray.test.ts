import { assertEquals } from "@std/assert";
import { range } from "../../range.ts";
import { iterableToArray } from "../iterableToArray.ts";

Deno.test(
	"a string returns an array with every letter of that string",
	async () => assertEquals(await iterableToArray("Witch"), [..."Witch"]),
);

Deno.test("an array returns that same array", async () =>
	assertEquals(await iterableToArray(["Coven", "Engineering"]), [
		"Coven",
		"Engineering",
	]),
);

Deno.test("a generator returns an array with generated values", async () =>
	assertEquals(
		await iterableToArray(range(1)(0)(10)),
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	),
);
