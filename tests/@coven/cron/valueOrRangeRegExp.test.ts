import { valueOrRangeRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 return value or range regular expression", () =>
	assertStrictEquals(valueOrRangeRegExp(13), "13(?:-13)?"));
