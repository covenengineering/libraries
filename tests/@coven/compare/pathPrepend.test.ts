import { DELETE_KIND, flat, pathPrepend } from "@coven/compare";
import { assertEquals } from "@std/assert";

const prepend13 = pathPrepend(13);

Deno.test("Prepend key to existing path", () =>
	assertEquals(
		flat([
			prepend13({
				kind: DELETE_KIND,
				left: "🧙🏻‍♀️",
				path: (function* (): Generator<PropertyKey> {
					yield 42;
				})(),
			}),
		]),
		[{ kind: DELETE_KIND, left: "🧙🏻‍♀️", path: [13, 42] }],
	),
);

Deno.test("Prepend key to missing path yields prepended key", () =>
	assertEquals(
		flat([
			prepend13({
				kind: DELETE_KIND,
				left: "🧙🏻‍♀️",
				path: [].values(),
			}),
		]),
		[
			{
				kind: DELETE_KIND,
				left: "🧙🏻‍♀️",
				path: [13],
			},
		],
	),
);
