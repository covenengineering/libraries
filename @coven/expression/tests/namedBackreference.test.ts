import { namedBackreference } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Named backreference to group ✨", () =>
	assertStrictEquals(namedBackreference("✨"), String.raw`\k<✨>`));
