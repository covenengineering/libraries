import { capture } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a parenthesis around it", () =>
	assertStrictEquals(capture(13), "(13)"),
);
