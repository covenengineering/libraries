import { EMPTY_ARRAY } from "@coven/constants";
import { join, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

Deno.test(
	"Array of numbers returns those numbers separated by spaces",
	async () => assertEquals(await spaceJoin(array), "0 1 2 3"),
);

Deno.test(
	"Iterable of numbers returns those numbers separated by spaces",
	async () => assertEquals(await spaceJoin(toIterable(array)), "0 1 2 3"),
);

Deno.test("Empty array returns empty string", async () =>
	assertEquals(await spaceJoin(EMPTY_ARRAY), ""));

Deno.test("Empty iterable returns empty string", async () =>
	assertEquals(await spaceJoin(toIterable(EMPTY_ARRAY)), ""));

Deno.test(
	"Iterable with empty strings returns spaces for each value",
	async () => assertEquals(await spaceJoin(toIterable(["", "", ""])), "  "),
);

Deno.test(
	"Iterable with undefined values returns empty stringified undefined values",
	async () =>
		assertEquals(
			await spaceJoin(toIterable([undefined, undefined])),
			"undefined undefined",
		),
);
