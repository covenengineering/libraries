import { assert, assertFalse } from "@std/assert";
import { rangeStringTest } from "../rangeStringTest.ts";

Deno.test("Range string returns true", () => assert(rangeStringTest("10-13")));

Deno.test("Invalid range string returns false", () =>
	assertFalse(rangeStringTest("nope")),
);
