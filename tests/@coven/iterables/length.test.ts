import { length, range } from "@coven/iterables";
import { assertStrictEquals } from "@std/assert";
import { iterateArray } from "./utils.ts";

const array = [0, 1, 2];

Deno.test("an array returns length", () =>
	assertStrictEquals(length(array), 3),
);

Deno.test("an iterable returns length", () =>
	assertStrictEquals(length(range(1)(0)(2)), 3),
);

Deno.test("an empty array returns 0", () => assertStrictEquals(length([]), 0));

Deno.test("an empty iterable returns 0", () =>
	assertStrictEquals(length(iterateArray([])), 0),
);
