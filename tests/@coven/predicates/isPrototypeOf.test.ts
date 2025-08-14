import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { isPrototypeOf } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const isPrototypeOfObject = isPrototypeOf(Object);

Deno.test("Empty object", () => assert(isPrototypeOfObject({})));

Deno.test("Empty object with null prototype", () =>
	assertFalse(isPrototypeOfObject(EMPTY_OBJECT)));

Deno.test("Array", () => assertFalse(isPrototypeOfObject(EMPTY_ARRAY)));

Deno.test("Regular expression", () => assertFalse(isPrototypeOfObject(/-/u)));
