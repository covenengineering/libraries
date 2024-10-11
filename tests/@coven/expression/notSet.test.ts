import { notSet } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 wrap it with a negated set", () =>
	assertStrictEquals(notSet(13), "[^13]"));

Deno.test("a number 1, and a 3 wrap them with a negated set", () =>
	assertStrictEquals(notSet(1, 3), "[^13]"));
