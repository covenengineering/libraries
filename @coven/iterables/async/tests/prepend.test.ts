import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { prepend } from "../prepend.ts";

const prependNumbers = prepend([0, 1, 2, 3, 4]);

Deno.test(
	"an array of numbers an array of strings returns both arrays concatenated",
	async () =>
		assertEquals(await iterableToArray(prependNumbers(["foo", "bar"])), [
			0,
			1,
			2,
			3,
			4,
			"foo",
			"bar",
		]),
);
