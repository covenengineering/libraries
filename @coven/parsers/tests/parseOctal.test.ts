import { assertStrictEquals } from "@std/assert";
import { parseOctal } from "../parseOctal.ts";

Deno.test("Parsing valid octal string returns parsed value", () =>
	assertStrictEquals(parseOctal("101"), 0o101),
);

Deno.test("Parsing octal string with a dot returns parsed value", () =>
	assertStrictEquals(parseOctal("101.5"), 0o101),
);

Deno.test("Parsing invalid string returns undefined", () =>
	assertStrictEquals(parseOctal("nope"), undefined),
);
