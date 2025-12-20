import { EMPTY_ARRAY } from "@coven/constants";
import { length, range } from "@coven/iterables";
import { assertStrictEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("Array returns length", () => assertStrictEquals(length(array), 3));

Deno.test("Iterable returns length", () =>
	assertStrictEquals(length(range(1)(0)(2)), 3),
);

Deno.test("Empty array returns 0", () =>
	assertStrictEquals(length(EMPTY_ARRAY), 0),
);

Deno.test("Empty iterable returns 0", () =>
	assertStrictEquals(length(Iterator.from(EMPTY_ARRAY)), 0),
);
