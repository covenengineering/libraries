import { assertStrictEquals } from "@std/assert";
import { unicodeCharacterClass } from "../unicodeCharacterClass.ts";

Deno.test("Number 13 adds a the unicode character class escape around it", () =>
	assertStrictEquals(unicodeCharacterClass(13), String.raw`\p{13}`),
);
