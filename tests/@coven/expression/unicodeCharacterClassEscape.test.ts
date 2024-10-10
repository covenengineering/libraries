import { unicodeCharacterClassEscape } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"a number 13 add a the unicode character class escape around it",
	() =>
		assertStrictEquals(unicodeCharacterClassEscape(13), String.raw`\p{13}`),
);
