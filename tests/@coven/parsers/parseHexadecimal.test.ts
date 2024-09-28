import { parseHexadecimal } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Valid hexadecimal string returns correct value", () =>
	assertEquals(parseHexadecimal("101"), 0x1_01));

Deno.test("Hexadecimal string with a dot returns correct value", () =>
	assertEquals(parseHexadecimal("101.5"), 0x1_01));

Deno.test("Invalid string returns correct value", () =>
	assertEquals(parseHexadecimal("invalid"), undefined));
