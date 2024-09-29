import { isSafeInteger } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

Deno.test("a safe integer", () => assert(isSafeInteger(1)));

Deno.test("a float", () => assertFalse(isSafeInteger(1.5)));

Deno.test("a negative integer", () => assert(isSafeInteger(-1)));

Deno.test("a negative float", () => assertFalse(isSafeInteger(-1.5)));
