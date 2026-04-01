import { assert, assertFalse } from "@std/assert";
import { hasPrototype } from "../hasPrototype.ts";

Deno.test("Array instance doesn't have prototype", () =>
	assertFalse(hasPrototype([])),
);

Deno.test("Array constructor has prototype", () => assert(hasPrototype(Array)));

Deno.test("Object instance doesn't have prototype", () =>
	assertFalse(hasPrototype({})),
);

Deno.test("Object constructor has prototype", () =>
	assert(hasPrototype(Object)),
);
