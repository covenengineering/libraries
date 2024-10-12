import { EMPTY_ARRAY } from "@coven/constants";
import { drop, head, range } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const array = [0, 1, 2];

Deno.test("an array returns array first element", () =>
	assertEquals(head(array), 0));

Deno.test("an iterable returns iterable's first element", () =>
	assertEquals(head(range(1)(0)(2)), 0));

Deno.test("an empty array returns undefined", () =>
	assertEquals(head(EMPTY_ARRAY), undefined));

Deno.test("an empty iterable returns undefined", () =>
	assertEquals(head(drop(Infinity)(array)), undefined));
