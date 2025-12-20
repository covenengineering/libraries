import { createObject } from "@coven/utils";
import { assertEquals } from "@std/assert";

const object = { "✨": "✨" } as const;

Deno.test("Create empty object has no prototype", () =>
	// deno-lint-ignore coven/no-null
	assertEquals(Object.getPrototypeOf(createObject()), null),
);

Deno.test("Create object has no prototype", () =>
	// deno-lint-ignore coven/no-null
	assertEquals(Object.getPrototypeOf(createObject(object)), null),
);

Deno.test("Created object has all properties of original object", () =>
	assertEquals(createObject(object), object),
);
