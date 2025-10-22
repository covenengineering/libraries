import { capture } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a parenthesis around it", () =>
	assertStrictEquals(capture(13), "(13)"));

Deno.test("Number 1, and number 3 adds a parenthesis around it", () =>
	assertStrictEquals(capture(1, 3), "(13)"));
