import { capture } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 add a parenthesis around it", () =>
	assertStrictEquals(capture(13), "(13)"),
);
