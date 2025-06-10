import { EMPTY_ARRAY, EMPTY_OBJECT } from "@coven/constants";
import { parseJSON } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test(
	"JSON with a malicious __proto__ returns object without __proto__",
	() => assertEquals(parseJSON('{"__proto__":"😈"}'), EMPTY_OBJECT),
);

Deno.test("Parsing JSON with an empty object returns empty object", () =>
	assertEquals(parseJSON("{}"), EMPTY_OBJECT),
);

Deno.test("Parsing JSON with an object returns empty object", () =>
	assertEquals(parseJSON('{"✨":"🎃"}'), { "✨": "🎃" }),
);

Deno.test("Parsing JSON with an empty array returns empty array", () =>
	assertEquals(parseJSON("[]"), EMPTY_ARRAY),
);

Deno.test("Parsing JSON with an array with numbers returns array", () =>
	assertEquals(parseJSON("[13,42,665]"), [13, 42, 665]),
);

Deno.test("Parsing JSON with a string returns a string", () =>
	assertEquals(parseJSON('"✨"'), "✨"),
);

Deno.test("Parsing invalid JSON returns undefined and `SyntaxError`", () =>
	assertEquals(parseJSON("invalid"), undefined),
);

Deno.test("Parsing JSON with a number returns a number", () =>
	assertEquals(parseJSON("13"), 13),
);

Deno.test("Parsing JSON with custom reviver", () =>
	assertEquals(
		parseJSON('{"url":"https://coven.engineering"}', (key, value) =>
			key === "url" && typeof value === "string" ? new URL(value) : value,
		),
		{ url: new URL("https://coven.engineering") },
	),
);
