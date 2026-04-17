import { assertStrictEquals } from "@std/assert";
import { stringify } from "../stringify.ts";

Deno.test("Stringifies booleans as expected", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(stringify(true), "true"),
);

Deno.test("Stringifies null as expected", () =>
	// deno-lint-ignore coven/no-null
	assertStrictEquals(stringify(null), "null"),
);

Deno.test("Stringifies undefined as expected", () =>
	assertStrictEquals(stringify(undefined), "undefined"),
);

Deno.test("Stringifies numbers as expected", () =>
	assertStrictEquals(stringify(13), "13"),
);

Deno.test("Stringifies bigints as expected", () =>
	assertStrictEquals(stringify(13n), "13"),
);

Deno.test("Stringifies string as expected", () =>
	assertStrictEquals(stringify("Coven"), "Coven"),
);

Deno.test("Stringifies symbol as expected", () =>
	assertStrictEquals(stringify(Symbol("Coven")), "Symbol(Coven)"),
);

Deno.test("Stringifies function as expected", () =>
	assertStrictEquals(
		stringify(() => {}),
		"()=>{}",
	),
);

Deno.test("Stringifies objects as expected", () =>
	assertStrictEquals(stringify({}), "[object Object]"),
);
