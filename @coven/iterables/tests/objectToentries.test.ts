import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { iterableToArray, objectToEntries } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const symbol = Symbol("🟩");

Deno.test("an empty object returns an empty array", () =>
	assertEquals(iterableToArray(objectToEntries(EMPTY_OBJECT)), EMPTY_ARRAY),
);

Deno.test(
	"an object with a single property returns an array with a single tuple",
	() =>
		assertEquals(iterableToArray(objectToEntries({ "🟩": "🟢" })), [
			["🟩", "🟢"],
		]),
);

Deno.test(
	"an object with a few properties returns an array with a few tuples",
	() =>
		assertEquals(
			iterableToArray(objectToEntries({ "💚": "✅", "🟩": "🟢" })),
			[
				["💚", "✅"],
				["🟩", "🟢"],
			],
		),
);

Deno.test(
	"an object with a number property returns an array with a tuple with that number turned intro a string",
	() =>
		assertEquals(iterableToArray(objectToEntries({ 0: "🟢" })), [
			["0", "🟢"],
		]),
);

Deno.test("an object with a symbol property returns that symbol entry", () =>
	assertEquals(iterableToArray(objectToEntries({ [symbol]: "🟢" })), [
		[symbol, "🟢"],
	]),
);
