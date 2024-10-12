import { unicode } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a the unicode escape around it", () =>
	assertStrictEquals(unicode(13), String.raw`\u{13}`));
