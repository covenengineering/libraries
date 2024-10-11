import { paddedRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 5 return number with padded 0?", () =>
	assertStrictEquals(paddedRegExp(5), "0?5"));
