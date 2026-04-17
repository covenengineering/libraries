import { EMPTY_ARRAY } from "@coven/constants";
import { assertStrictEquals } from "@std/assert";
import { join } from "../join.ts";

const spaceJoin = join(" ");
const array = [0, 1, 2, 3];

Deno.test("Array of numbers returns those numbers separated by spaces", () =>
	assertStrictEquals(spaceJoin(array), "0 1 2 3"),
);

Deno.test("Iterable of numbers returns those numbers separated by spaces", () =>
	assertStrictEquals(spaceJoin(Iterator.from(array)), "0 1 2 3"),
);

Deno.test("Empty array returns empty string", () =>
	assertStrictEquals(spaceJoin(EMPTY_ARRAY), ""),
);

Deno.test("Empty iterable returns empty string", () =>
	assertStrictEquals(spaceJoin(Iterator.from(EMPTY_ARRAY)), ""),
);

Deno.test("Iterable with empty strings returns spaces for each value", () =>
	assertStrictEquals(spaceJoin(Iterator.from(["", "", ""])), "  "),
);

Deno.test(
	"Iterable with undefined values returns empty stringified undefined values",
	() =>
		assertStrictEquals(
			spaceJoin(Iterator.from([undefined, undefined])),
			"undefined undefined",
		),
);
