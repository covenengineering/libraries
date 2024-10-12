import { capturedNumber } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("Number 13 adds an escape sequence to the left", () =>
	assertStrictEquals(capturedNumber(13), String.raw`\13`));
