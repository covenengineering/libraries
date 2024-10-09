import { iterableToArray, zip } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const zipFooBar = zip(["foo", "bar"]);

Deno.test("zip empty array returns empty array", () =>
	assertEquals(iterableToArray(zipFooBar([])), []),
);

Deno.test(
	"zip with 2 strings an array with 2 numbers zips numbers and strings",
	() =>
		assertEquals(iterableToArray(zipFooBar([1, 2])), [
			["foo", 1],
			["bar", 2],
		]),
);

Deno.test(
	"zip with 2 strings and array with 1 string zips strings to shortests length",
	() => assertEquals(iterableToArray(zipFooBar(["baz"])), [["foo", "baz"]]),
);
