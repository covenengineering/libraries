import { lookahead } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds capture next group around it", () =>
	assertStrictEquals(lookahead(13), "(?=13)"));
