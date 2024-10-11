import { range } from "@coven/iterables";
import { forEach } from "@coven/iterables/async";
import type { AwaitableIterable } from "@coven/types";
import { assertEquals } from "@std/assert";

const forEachTest = <Item>(iterable: AwaitableIterable<Item>) => {
	const output: Array<Item> = [];

	return forEach((item: Item) => void output.push(item))(iterable).then(
		(_) => output,
	);
};

Deno.test("a string loops over every letter of that string", async () =>
	assertEquals(await forEachTest("Lou"), [..."Lou"]));

Deno.test("an array loops over every item of that array", async () =>
	assertEquals(await forEachTest(["🟢", "🟩"]), ["🟢", "🟩"]));

Deno.test("a generator loops over every yielded value", async () =>
	assertEquals(
		await forEachTest(range(1)(0)(10)),
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	));
