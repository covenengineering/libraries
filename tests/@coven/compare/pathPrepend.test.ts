import { DELETE, pathPrepend } from "@coven/compare";
import { assertEquals } from "@std/assert";
import { flatCompare } from "./utils.ts";

const prepend13 = pathPrepend(13);

Deno.test("Prepend key to existing path", () =>
	assertEquals(
		flatCompare(prepend13({
			kind: DELETE,
			left: "🧙🏻‍♀️",
			path: (function* (): Generator<PropertyKey> {
				yield 42;
			})(),
		})),
		{ kind: DELETE, left: "🧙🏻‍♀️", path: [13, 42] },
	));

Deno.test("Prepend key to missing path", () =>
	assertEquals(
		flatCompare(prepend13({ kind: DELETE, left: "🧙🏻‍♀️" })),
		{ kind: DELETE, left: "🧙🏻‍♀️", path: [13] },
	));
