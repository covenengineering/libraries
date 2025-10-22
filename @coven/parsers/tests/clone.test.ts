import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { clone } from "@coven/parsers";
import type { StructuredData } from "@coven/types";
import { assertEquals } from "@std/assert";

Deno.test("Cloning empty object returns copy of object", () =>
	assertEquals(clone(EMPTY_OBJECT), EMPTY_OBJECT));

Deno.test("Cloning object with a string returns copy of object", () =>
	assertEquals(clone({ foo: "bar" }), { foo: "bar" }));

Deno.test("Cloning empty array returns copy of empty array", () =>
	assertEquals(clone(EMPTY_ARRAY), EMPTY_ARRAY));

Deno.test("Cloning array with numbers returns copy of array", () =>
	assertEquals(clone([1, 2, 3]), [1, 2, 3]));

Deno.test("Cloning string returns copy of string", () =>
	assertEquals(clone("string"), "string"));

Deno.test("Cloning non serializable object returns undefined", () =>
	assertEquals(
		clone({ function: () => undefined } as unknown as StructuredData),
		undefined,
	));

Deno.test("Cloning number returns a copy of number", () =>
	assertEquals(clone(13), 13));
