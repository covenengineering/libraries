import { normalizeString } from "@coven/terminal";
import { assertEquals } from "@std/assert";

Deno.test("Normalize string works on a plain string", () =>
	assertEquals(normalizeString("🧙‍♀️"), "🧙‍♀️"),
);

Deno.test("Normalize string works as a template string tag function", () =>
	assertEquals(normalizeString`${13}`, "13"),
);
