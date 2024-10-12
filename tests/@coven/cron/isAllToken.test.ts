import { isAllToken } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("String that is a * returns true", () => assert(isAllToken("*")));

Deno.test("String that isn't a * returns false", () =>
	assertFalse(isAllToken("nope")));
