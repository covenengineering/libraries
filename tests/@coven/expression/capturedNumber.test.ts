import { capturedNumber } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 add an escape sequence to the left", () =>
	assertStrictEquals(capturedNumber(13), String.raw`\13`));
