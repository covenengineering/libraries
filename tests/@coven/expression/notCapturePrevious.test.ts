import { notCapturePrevious } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 not capture previous group around 13", () =>
	assertStrictEquals(notCapturePrevious(13), "(?<!13)"));

Deno.test("a number 1, and a 3 not capture previous group around 13", () =>
	assertStrictEquals(notCapturePrevious(1, 3), "(?<!13)"));
