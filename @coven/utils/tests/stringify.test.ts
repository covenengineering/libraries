import { assertEquals } from "@std/assert";
import { stringify } from "../stringify.ts";

Deno.test("Stringifies booleans as expected", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(stringify(true), "true"),
);

Deno.test("Stringifies null as expected", () =>
	// deno-lint-ignore coven/no-null
	assertEquals(stringify(null), "null"),
);

Deno.test("Stringifies undefined as expected", () =>
	assertEquals(stringify(undefined), "undefined"),
);

Deno.test("Stringifies numbers as expected", () =>
	assertEquals(stringify(13), "13"),
);

Deno.test("Stringifies bigints as expected", () =>
	assertEquals(stringify(13n), "13"),
);

Deno.test("Stringifies string as expected", () =>
	assertEquals(stringify("Coven"), "Coven"),
);

Deno.test("Stringifies symbol as expected", () =>
	assertEquals(stringify(Symbol("Coven")), "Symbol(Coven)"),
);

Deno.test("Stringifies function as expected", () =>
	assertEquals(
		stringify(() => {}),
		"()=>{}",
	),
);

Deno.test("Stringifies objects as expected", () =>
	assertEquals(stringify({}), "[object Object]"),
);
