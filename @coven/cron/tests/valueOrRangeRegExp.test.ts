import { valueOrRangeRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 returns value or range regular expression", () =>
	assertStrictEquals(valueOrRangeRegExp(13), "13(?:-13)?"));
