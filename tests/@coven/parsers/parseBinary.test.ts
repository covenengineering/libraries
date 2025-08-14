import { parseBinary } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Parsing valid binary string returns parsed value", () =>
	assertEquals(parseBinary("101"), 0b101));

Deno.test("Parsing binary string with a dot returns parsed value", () =>
	assertEquals(parseBinary("101.5"), 0b101));

Deno.test("Parsing invalid string returns undefined", () =>
	assertEquals(parseBinary("invalid"), undefined));
