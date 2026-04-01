import { createObject } from "@coven/utils";
import { assert, assertFalse } from "@std/assert";
import { is } from "../is.ts";

const magic = "✨";
const magicCopy = magic;
const pumpkin = "🎃";

Deno.test("Equal values", () => assert(is(magic)(magicCopy)));

Deno.test("Different strings", () => assertFalse(is(magic)(pumpkin)));

Deno.test("Equal objects", () =>
	assertFalse(is(createObject())(createObject())),
);

Deno.test("Equal arrays", () => assertFalse(is([])([])));
