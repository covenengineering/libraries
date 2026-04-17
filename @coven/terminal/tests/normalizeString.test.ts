import { assertStrictEquals } from "@std/assert";
import { normalizeString } from "../normalizeString.ts";

Deno.test("Normalize string works on a plain string", () =>
	assertStrictEquals(normalizeString("✨"), "✨"),
);

Deno.test("Normalize string works as a template string tag function", () =>
	assertStrictEquals(normalizeString`${13}`, "13"),
);
