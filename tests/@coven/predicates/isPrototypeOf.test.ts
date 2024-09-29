import { isPrototypeOf } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const isPrototypeOfObject = isPrototypeOf(Object);

Deno.test("Empty object", () => assert(isPrototypeOfObject({})));

Deno.test("Array", () => assertFalse(isPrototypeOfObject([])));

Deno.test("Regular expression", () => assertFalse(isPrototypeOfObject(/-/u)));
