import { fieldRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a test named expression with the value 13 return regular expression for a cron field", () =>
	assertStrictEquals(
		fieldRegExp("test", "13"),
		String.raw`(?<test>\*|(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?)))`,
	));
