import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { objectToEntries } from "../objectToEntries.ts";

const symbol = Symbol("Test");

Deno.test("an empty object returns an empty array", () =>
	assertEquals(iterableToArray(objectToEntries(EMPTY_OBJECT)), EMPTY_ARRAY),
);

Deno.test(
	"an object with a single property returns an array with a single tuple",
	() =>
		assertEquals(
			iterableToArray(objectToEntries({ Coven: "Engineering" })),
			[["Coven", "Engineering"]],
		),
);

Deno.test(
	"an object with a few properties returns an array with a few tuples",
	() =>
		assertEquals(
			iterableToArray(
				objectToEntries({ Witch: "Magic", Coven: "Engineering" }),
			),
			[
				["Witch", "Magic"],
				["Coven", "Engineering"],
			],
		),
);

Deno.test(
	"an object with a number property returns an array with a tuple with that number turned intro a string",
	() =>
		assertEquals(iterableToArray(objectToEntries({ 0: "Engineering" })), [
			["0", "Engineering"],
		]),
);

Deno.test("an object with a symbol property returns that symbol entry", () =>
	assertEquals(
		iterableToArray(objectToEntries({ [symbol]: "Engineering" })),
		[[symbol, "Engineering"]],
	),
);
