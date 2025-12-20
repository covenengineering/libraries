import { isNumberString } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("String that is a * returns false", () =>
	assertFalse(isNumberString("*")),
);

Deno.test("Valid number returns true", () => assert(isNumberString("13")));
