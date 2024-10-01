import { parseOctal } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test("Valid octal string returns correct value", () =>
	assertEquals(parseOctal("101"), 0o101),
);

Deno.test("Octal string with a dot returns correct value", () =>
	assertEquals(parseOctal("101.5"), 0o101),
);

Deno.test("Invalid string returns correct value", () =>
	assertEquals(parseOctal("nope"), undefined),
);
