import type { AwaitableIterable } from "@coven/types";
import { assertEquals } from "@std/assert";
import { range } from "../../range.ts";
import { forEach } from "../forEach.ts";

const forEachTest = async <Item>(iterable: AwaitableIterable<Item>) => {
	const output: Array<Item> = [];

	await forEach((item: Item) => void output.push(item))(iterable);

	return output;
};

Deno.test("a string loops over every letter of that string", async () =>
	assertEquals(await forEachTest("Witch"), [..."Witch"]),
);

Deno.test("an array loops over every item of that array", async () =>
	assertEquals(await forEachTest(["Coven", "Engineering"]), [
		"Coven",
		"Engineering",
	]),
);

Deno.test("a generator loops over every yielded value", async () =>
	assertEquals(
		await forEachTest(range(1)(0)(10)),
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	),
);
