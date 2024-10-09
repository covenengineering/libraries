import { forEach, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const forEachTest = <Item>(iterable: Iterable<Item>) => {
	const output: Array<Item> = [];

	forEach((item: Item) => output.push(item))(iterable);

	return output;
};

Deno.test("a string loops over every letter of that string", () =>
	assertEquals(forEachTest("Coven"), [..."Coven"]),
);

Deno.test("an array loops over every item of that array", () =>
	assertEquals(forEachTest(["🧙🏻", "🎃"]), ["🧙🏻", "🎃"]),
);

Deno.test("a generator loops over every yielded value", () =>
	assertEquals(
		forEachTest(range(1)(0)(10)),
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	),
);
