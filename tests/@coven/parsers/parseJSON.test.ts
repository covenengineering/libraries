import { parseJSON } from "@coven/parsers";
import { assertEquals } from "@std/assert";

Deno.test(
	"JSON with a malicious __proto__ returns object without __proto__",
	() => assertEquals(parseJSON('{"__proto__":"😈"}'), {}),
);

Deno.test("JSON with an empty object returns empty object", () =>
	assertEquals(parseJSON("{}"), {}),
);

Deno.test("JSON with an object returns empty object", () =>
	assertEquals(parseJSON('{"foo":"bar"}'), { foo: "bar" }),
);

Deno.test("JSON with an empty array returns empty array", () =>
	assertEquals(parseJSON("[]"), []),
);

Deno.test("JSON with an array with numbers returns array", () =>
	assertEquals(parseJSON("[1,2,3]"), [1, 2, 3]),
);

Deno.test("JSON with a string returns a string", () =>
	assertEquals(parseJSON('"string"'), "string"),
);

Deno.test("invalid JSON returns undefined", () =>
	assertEquals(parseJSON("invalid"), undefined),
);

Deno.test("JSON with a number returns a number", () =>
	assertEquals(parseJSON("1"), 1),
);
