import { unicodeCharacterClassEscape } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds a the unicode character class escape around it", () =>
	assertStrictEquals(unicodeCharacterClassEscape(13), String.raw`\p{13}`),
);
