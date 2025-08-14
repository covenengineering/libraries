import { negativeLookbehind } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 is not capture previous group around 13", () =>
	assertStrictEquals(negativeLookbehind(13), "(?<!13)"));

Deno.test("Number 1, and a 3 are not capture previous group around 13", () =>
	assertStrictEquals(negativeLookbehind(1, 3), "(?<!13)"));
