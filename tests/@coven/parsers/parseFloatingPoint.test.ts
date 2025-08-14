import { parseFloatingPoint } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Parsing valid float point string returns parsed value", () =>
	assertEquals(parseFloatingPoint("101"), 101));

Deno.test("Parsing float point string with a dot returns parsed value", () =>
	assertEquals(parseFloatingPoint("101.5"), 101.5));

Deno.test("Parsing invalid string returns undefined", () =>
	assertEquals(parseFloatingPoint("invalid"), undefined));
