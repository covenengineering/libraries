import { valueRangeOrListRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 returns string expression", () =>
	assertStrictEquals(
		valueRangeOrListRegExp(13),
		"(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?))",
	),
);
