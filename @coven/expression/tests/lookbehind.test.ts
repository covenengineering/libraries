import { lookbehind } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 add capture previous group around it", () =>
	assertStrictEquals(lookbehind(13), "(?<=13)"));

Deno.test("Number 1, and a 3 add capture previous group around it", () =>
	assertStrictEquals(lookbehind(1, 3), "(?<=13)"));
