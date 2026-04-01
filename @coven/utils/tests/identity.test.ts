import { assertStrictEquals } from "@std/assert";
import { identity } from "../identity.ts";

const anObject = { lucky: 13 };

Deno.test("Identity returns the same string it receives", () =>
	assertStrictEquals(identity("✨"), "✨"),
);

Deno.test("Identity returns the same object it receives, not a copy", () =>
	assertStrictEquals(identity(anObject), anObject),
);
