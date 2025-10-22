import { EMPTY_ARRAY } from "@coven/constants";
import { drop, head, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("Array returns array first element", () =>
	assertEquals(head(array), 0));

Deno.test("Iterable returns iterable's first element", () =>
	assertEquals(head(range(1)(0)(2)), 0));

Deno.test("Empty array returns undefined", () =>
	assertEquals(head(EMPTY_ARRAY), undefined));

Deno.test("Empty iterable returns undefined", () =>
	assertEquals(head(drop(Infinity)(array)), undefined));
