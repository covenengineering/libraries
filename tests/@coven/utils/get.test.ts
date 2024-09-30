import { get } from "@coven/utils";
import { assertStrictEquals } from "@std/assert";

const getWitch = get("🧙🏻‍♀️");

const EXPECTED = true;

Deno.test("Getter and an object with that property on it returns property value", () =>
	assertStrictEquals(getWitch({ "🧙🏻‍♀️": EXPECTED }), EXPECTED));

Deno.test("Getter and an object without that property on it returns property value", () =>
	assertStrictEquals(
		getWitch({} as { readonly "🧙🏻‍♀️": boolean }),
		undefined,
	));
