import { DELETE_KIND, pathPrepend } from "@coven/compare";
import { assertEquals } from "@std/assert";
import { flatCompare } from "./utils.ts";

const prepend13 = pathPrepend(13);

Deno.test("Prepend key to existing path", () =>
	assertEquals(
		flatCompare(
			prepend13({
				kind: DELETE_KIND,
				left: "🧙🏻‍♀️",
				path: (function* (): Generator<PropertyKey> {
					yield 42;
				})(),
			}),
		),
		{ kind: DELETE_KIND, left: "🧙🏻‍♀️", path: [13, 42] },
	));

Deno.test("Prepend key to missing path yields prepended key", () =>
	assertEquals(
		flatCompare(prepend13({ kind: DELETE_KIND, left: "🧙🏻‍♀️" })),
		{
			kind: DELETE_KIND,
			left: "🧙🏻‍♀️",
			path: [13],
		},
	));
