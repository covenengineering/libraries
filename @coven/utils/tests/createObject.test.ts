import { assertEquals, assertStrictEquals } from "@std/assert";
import { createObject } from "../createObject.ts";

const object = { "✨": "✨" } as const;

Deno.test("Create empty object has no prototype", () =>
	// deno-lint-ignore coven/no-null
	assertStrictEquals(Object.getPrototypeOf(createObject()), null),
);

Deno.test("Create object has no prototype", () =>
	// deno-lint-ignore coven/no-null
	assertStrictEquals(Object.getPrototypeOf(createObject(object)), null),
);

Deno.test("Created object has all properties of original object", () =>
	assertEquals(createObject(object), object),
);
