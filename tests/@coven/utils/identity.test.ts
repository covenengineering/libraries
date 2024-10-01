import { identity } from "@coven/utils";
import { assertStrictEquals } from "@std/assert";

const anObject = { lucky: 13 };

Deno.test("Identity returns the same string it receives", () =>
	assertStrictEquals(identity("🧙🏻‍♀️"), "🧙🏻‍♀️"),
);

Deno.test("Identity returns the same object it receives, not a copy", () =>
	assertStrictEquals(identity(anObject), anObject),
);
