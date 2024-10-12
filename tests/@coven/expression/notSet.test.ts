import { notSet } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 is wrapped it with a negated set", () =>
	assertStrictEquals(notSet(13), "[^13]"));

Deno.test("Number 1, and a 3 are wrapped them with a negated set", () =>
	assertStrictEquals(notSet(1, 3), "[^13]"));
