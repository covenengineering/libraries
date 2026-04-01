import { assertStrictEquals } from "@std/assert";
import { backreference } from "../backreference.ts";

Deno.test("Number 13 adds an escape sequence to the left", () =>
	assertStrictEquals(backreference(13), String.raw`\13`),
);
