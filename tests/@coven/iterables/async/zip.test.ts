import { iterableToArray, toIterable, zip } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const zipFooBar = zip(toIterable(["foo", "bar"]));

Deno.test("zip empty array returns empty array", async () =>
	assertEquals(await iterableToArray(zipFooBar([])), []),
);

Deno.test(
	"zip with 2 strings an array with 2 numbers zips numbers and strings",
	async () =>
		assertEquals(await iterableToArray(zipFooBar([1, 2])), [
			["foo", 1],
			["bar", 2],
		]),
);

Deno.test(
	"zip with 2 strings and array with 1 string zips strings to shortests length",
	async () =>
		assertEquals(await iterableToArray(zipFooBar(["baz"])), [
			["foo", "baz"],
		]),
);

Deno.test(
	"zip with 2 strings and array with 3 numbers zips strings to shortests length",
	async () =>
		assertEquals(await iterableToArray(zipFooBar([1, 2, 3])), [
			["foo", 1],
			["bar", 2],
		]),
);
