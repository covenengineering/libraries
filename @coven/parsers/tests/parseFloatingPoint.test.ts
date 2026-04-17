import { assertStrictEquals } from "@std/assert";
import { parseFloatingPoint } from "../parseFloatingPoint.ts";

Deno.test("Parsing valid float point string returns parsed value", () =>
	assertStrictEquals(parseFloatingPoint("101"), 101),
);

Deno.test("Parsing float point string with a dot returns parsed value", () =>
	assertStrictEquals(parseFloatingPoint("101.5"), 101.5),
);

Deno.test("Parsing invalid string returns undefined", () =>
	assertStrictEquals(parseFloatingPoint("invalid"), undefined),
);
