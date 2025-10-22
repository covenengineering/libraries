import { iterableToArray, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

Deno.test("a string returns an array with every letter of that string", () =>
	assertEquals(iterableToArray("Lou"), [..."Lou"]));

Deno.test("an array returns that same array", () =>
	assertEquals(iterableToArray(["🟢", "🟩"]), ["🟢", "🟩"]));

Deno.test("a generator returns an array with generated values", () =>
	assertEquals(
		iterableToArray(range(1)(0)(10)),
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	));
