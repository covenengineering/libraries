import { is } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const witch = "🧙🏻‍♀️";
const witchCopy = witch;
const pumpkin = "🎃";

Deno.test("Equal values", () => assert(is(witch)(witchCopy)));

Deno.test("Different strings", () => assertFalse(is(witch)(pumpkin)));

Deno.test("Equal objects", () =>
	assertFalse(is(Object.create(null))(Object.create(null))));

Deno.test("Equal arrays", () => assertFalse(is([])([])));
