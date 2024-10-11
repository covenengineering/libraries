import { allow } from "@coven/expression";
import { assertStringIncludes } from "@std/assert";

Deno.test("a number 13 add a star to the right", () =>
	assertStringIncludes(allow(13), "13*"));
