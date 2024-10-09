import { join } from "@coven/iterables";
import { assertEquals } from "@std/assert";
import { iterateArray } from "./utils.ts";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

Deno.test("an array of numbers returns those numbers separated by spaces", () =>
	assertEquals(spaceJoin(array), "0 1 2 3"),
);

Deno.test(
	"an iterable of numbers returns those numbers separated by spaces",
	() => assertEquals(spaceJoin(iterateArray(array)), "0 1 2 3"),
);

Deno.test("an empty array returns empty string", () =>
	assertEquals(spaceJoin([]), ""),
);

Deno.test("an empty iterable returns empty string", () =>
	assertEquals(spaceJoin(iterateArray([])), ""),
);

Deno.test("an iterable with empty strings returns spaces for each value", () =>
	assertEquals(spaceJoin(iterateArray(["", "", ""])), "  "),
);

Deno.test(
	"an iterable with undefined values returns empty stringified undefined values",
	() =>
		assertEquals(
			spaceJoin(iterateArray([undefined, undefined])),
			"undefined undefined",
		),
);
