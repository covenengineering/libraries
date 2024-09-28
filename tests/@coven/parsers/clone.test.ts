import { clone } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Empty object returns copy of object", () =>
	assertEquals(clone({}), {}));

Deno.test("Object with a string returns copy of object", () =>
	assertEquals(clone({ foo: "bar" }), { foo: "bar" }));

Deno.test("Empty array returns copy of empty array", () =>
	assertEquals(clone([]), []));

Deno.test("Array with numbers returns copy of array", () =>
	assertEquals(clone([1, 2, 3]), [1, 2, 3]));

Deno.test("String returns copy of string", () =>
	assertEquals(clone("string"), "string"));

Deno.test("Non serializable object returns undefined", () =>
	assertEquals(clone({ function: () => undefined }), undefined));

Deno.test("Number returns a copy of number", () => assertEquals(clone(1), 1));
