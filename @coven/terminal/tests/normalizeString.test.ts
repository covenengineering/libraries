import { assertEquals } from "@std/assert";
import { normalizeString } from "../normalizeString.ts";

Deno.test("Normalize string works on a plain string", () =>
	assertEquals(normalizeString("✨"), "✨"),
);

Deno.test("Normalize string works as a template string tag function", () =>
	assertEquals(normalizeString`${13}`, "13"),
);
