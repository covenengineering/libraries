import { fieldRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Test named expression with the value 13 returns a regular expression's string for a cron field", () =>
	assertStrictEquals(
		fieldRegExp("test", "13"),
		String.raw`(?<test>\*|(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?)))`,
	));
