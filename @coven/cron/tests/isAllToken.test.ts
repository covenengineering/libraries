import { assert, assertFalse } from "@std/assert";
import { isAllToken } from "../isAllToken.ts";

Deno.test("String that is a * returns true", () => assert(isAllToken("*")));

Deno.test("String that isn't a * returns false", () =>
	assertFalse(isAllToken("nope")),
);
