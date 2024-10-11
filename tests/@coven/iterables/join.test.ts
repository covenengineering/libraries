import { join } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

Deno.test("an array of numbers returns those numbers separated by spaces", () =>
	assertEquals(spaceJoin(array), "0 1 2 3"));

Deno.test(
	"an iterable of numbers returns those numbers separated by spaces",
	// deno-lint-ignore no-undef
	() => assertEquals(spaceJoin(Iterator.from(array)), "0 1 2 3"),
);

Deno.test("an empty array returns empty string", () =>
	assertEquals(spaceJoin([]), ""));

Deno.test("an empty iterable returns empty string", () =>
	// deno-lint-ignore no-undef
	assertEquals(spaceJoin(Iterator.from([])), ""));

Deno.test("an iterable with empty strings returns spaces for each value", () =>
	// deno-lint-ignore no-undef
	assertEquals(spaceJoin(Iterator.from(["", "", ""])), "  "));

Deno.test(
	"an iterable with undefined values returns empty stringified undefined values",
	() =>
		assertEquals(
			// deno-lint-ignore no-undef
			spaceJoin(Iterator.from([undefined, undefined])),
			"undefined undefined",
		),
);
