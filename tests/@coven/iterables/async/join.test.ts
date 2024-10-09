import { join, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

Deno.test(
	"an array of numbers returns those numbers separated by spaces",
	async () => assertEquals(await spaceJoin(array), "0 1 2 3"),
);

Deno.test(
	"an iterable of numbers returns those numbers separated by spaces",
	async () => assertEquals(await spaceJoin(toIterable(array)), "0 1 2 3"),
);

Deno.test("an empty array returns empty string", async () =>
	assertEquals(await spaceJoin([]), ""),
);

Deno.test("an empty iterable returns empty string", async () =>
	assertEquals(await spaceJoin(toIterable([])), ""),
);

Deno.test(
	"an iterable with empty strings returns spaces for each value",
	async () => assertEquals(await spaceJoin(toIterable(["", "", ""])), "  "),
);

Deno.test(
	"an iterable with undefined values returns empty stringified undefined values",
	async () =>
		assertEquals(
			await spaceJoin(toIterable([undefined, undefined])),
			"undefined undefined",
		),
);
