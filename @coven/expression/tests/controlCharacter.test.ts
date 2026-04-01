import { assertStrictEquals } from "@std/assert";
import { controlCharacter } from "../controlCharacter.ts";

Deno.test("Letter J is escaped with the c character", () =>
	assertStrictEquals(controlCharacter("J"), String.raw`\cJ`),
);
