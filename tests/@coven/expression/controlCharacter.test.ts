import { controlCharacter } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a letter L escape it with the c", () =>
	assertStrictEquals(controlCharacter("L"), String.raw`\cL`));
