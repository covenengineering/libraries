import { is } from "@coven/predicates";
import { createObject } from "@coven/utils";
import { assert, assertFalse } from "@std/assert";

const witch = "🧙🏻‍♀️";
const witchCopy = witch;
const pumpkin = "🎃";

Deno.test("Equal values", () => assert(is(witch)(witchCopy)));

Deno.test("Different strings", () => assertFalse(is(witch)(pumpkin)));

Deno.test("Equal objects", () =>
	assertFalse(is(createObject())(createObject())),
);

Deno.test("Equal arrays", () => assertFalse(is([])([])));
