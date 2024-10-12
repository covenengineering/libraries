import { EMPTY_ARRAY } from "@coven/constants";
import { length, range } from "@coven/iterables";
import { assertStrictEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("an array returns length", () =>
	assertStrictEquals(length(array), 3));

Deno.test("an iterable returns length", () =>
	assertStrictEquals(length(range(1)(0)(2)), 3));

Deno.test("an empty array returns 0", () =>
	assertStrictEquals(length(EMPTY_ARRAY), 0));

Deno.test("an empty iterable returns 0", () =>
	// deno-lint-ignore no-undef
	assertStrictEquals(length(Iterator.from(EMPTY_ARRAY)), 0));
