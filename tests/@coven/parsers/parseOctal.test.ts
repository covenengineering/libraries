import { parseOctal } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Parsing valid octal string returns parsed value", () =>
	assertEquals(parseOctal("101"), 0o101),
);

Deno.test("Parsing octal string with a dot returns parsed value", () =>
	assertEquals(parseOctal("101.5"), 0o101),
);

Deno.test("Parsing invalid string returns undefined", () =>
	assertEquals(parseOctal("nope"), undefined),
);
