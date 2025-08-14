import { range } from "@coven/iterables";
import { iterableToArray } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

Deno.test(
	"a string returns an array with every letter of that string",
	async () => assertEquals(await iterableToArray("Lou"), [..."Lou"]),
);

Deno.test("an array returns that same array", async () =>
	assertEquals(await iterableToArray(["🟢", "🟩"]), ["🟢", "🟩"]));

Deno.test("a generator returns an array with generated values", async () =>
	assertEquals(
		await iterableToArray(range(1)(0)(10)),
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	));
