import { paddedRegExp } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 5 returns number with padded 0?", () =>
	assertStrictEquals(paddedRegExp(5), "0?5"));
