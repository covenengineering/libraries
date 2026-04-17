import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import type { StructuredData } from "@coven/types";
import {
	assertEquals,
	assertNotStrictEquals,
	assertStrictEquals,
} from "@std/assert";
import { clone } from "../clone.ts";

/**
 * Check structure is the same but identities are different.
 */
const assertClone = <T>(actual: T, expected: T) => (
	assertEquals(actual, expected),
	assertNotStrictEquals(actual, expected)
);

Deno.test("Cloning empty object returns copy of object", () =>
	assertClone(clone(EMPTY_OBJECT), EMPTY_OBJECT),
);

Deno.test("Cloning object with a string returns copy of object", () =>
	assertClone(clone({ foo: "bar" }), { foo: "bar" }),
);

Deno.test("Cloning empty array returns copy of empty array", () =>
	assertClone(clone(EMPTY_ARRAY), EMPTY_ARRAY),
);

Deno.test("Cloning array with numbers returns copy of array", () =>
	assertClone(clone([1, 2, 3]), [1, 2, 3]),
);

Deno.test("Cloning string returns copy of string", () =>
	assertStrictEquals(clone("string"), "string"),
);

Deno.test("Cloning non serializable object returns undefined", () =>
	assertStrictEquals(
		clone({ function: () => undefined } as unknown as StructuredData),
		undefined,
	),
);

Deno.test("Cloning number returns a copy of number", () =>
	assertStrictEquals(clone(13), 13),
);
