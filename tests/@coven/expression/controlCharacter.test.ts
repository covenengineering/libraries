import { controlCharacter } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Letter J is escaped with the c character", () =>
	assertStrictEquals(controlCharacter("J"), String.raw`\cJ`),
);
