import { group } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a non-capturing group around it", () =>
	assertStrictEquals(group(13), "(?:13)"));

Deno.test("Number 1, and a 3 add a non-capturing next group around 13", () =>
	assertStrictEquals(group(1, 3), "(?:13)"));
