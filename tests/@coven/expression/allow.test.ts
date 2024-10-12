import { allow } from "@coven/expression";
import { assertStringIncludes } from "@std/assert";

Deno.test("Number 13 adds a star to the right", () =>
	assertStringIncludes(allow(13), "13*"));
