import { escape } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a letter L escape it", () =>
	assertStrictEquals(escape("L"), String.raw`\L`),
);
