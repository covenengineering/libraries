import { nonUnicodeCharacterClass } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"Unicode character class `\\P{Script_Extensions=Latin}` adds a escaped P at the left",
	() =>
		assertStrictEquals(
			nonUnicodeCharacterClass("Script_Extensions=Latin"),
			String.raw`\P{Script_Extensions=Latin}`,
		),
);
