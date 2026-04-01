import { assert, assertFalse } from "@std/assert";
import { isNumberString } from "../isNumberString.ts";

Deno.test("String that is a * returns false", () =>
	assertFalse(isNumberString("*")),
);

Deno.test("Valid number returns true", () => assert(isNumberString("13")));
