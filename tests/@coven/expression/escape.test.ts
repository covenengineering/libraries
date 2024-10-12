import { escape } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Letter L is escaped", () =>
	assertStrictEquals(escape("L"), String.raw`\L`));
