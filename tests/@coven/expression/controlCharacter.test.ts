import { controlCharacter } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Letter L is escaped with the c character", () =>
	assertStrictEquals(controlCharacter("L"), String.raw`\cL`));
