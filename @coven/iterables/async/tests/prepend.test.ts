import { iterableToArray, prepend } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

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
