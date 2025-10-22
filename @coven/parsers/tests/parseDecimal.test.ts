import { parseDecimal } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Parsing valid decimal string returns parsed value", () =>
	assertEquals(parseDecimal("101"), 101));

Deno.test("Parsing decimal string with a dot returns parsed value", () =>
	assertEquals(parseDecimal("101.5"), 101));

Deno.test("Parsing invalid string returns undefined", () =>
	assertEquals(parseDecimal("invalid"), undefined));
