import { rangeStringTest } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("Range string returns true", () => assert(rangeStringTest("10-13")));

Deno.test("Invalid range string returns false", () =>
	assertFalse(rangeStringTest("nope")));
