import { valueRangeOrListRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 return string expression", () =>
	assertStrictEquals(
		valueRangeOrListRegExp(13),
		"(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?))",
	));
