import { notUnicodeCharacterClassEscape } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"a unicode character class `\\P{Script_Extensions=Latin}` add a escaped P at the left",
	() =>
		assertStrictEquals(
			notUnicodeCharacterClassEscape("Script_Extensions=Latin"),
			String.raw`\P{Script_Extensions=Latin}`,
		),
);
