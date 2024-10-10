import { unicode } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 add a the unicode escape around it", () =>
	assertStrictEquals(unicode(13), String.raw`\u{13}`),
);
