import { assertEquals } from "@std/assert";
import { DELETE_KIND } from "../DELETE_KIND.ts";
import { flat } from "../flat.ts";
import { pathPrepend } from "../pathPrepend.ts";

const prepend13 = pathPrepend(13);

Deno.test("Prepend key to existing path", () =>
	assertEquals(
		flat([
			prepend13({
				kind: DELETE_KIND,
				left: "✨",
				path: (function* (): Generator<PropertyKey> {
					yield 42;
				})(),
			}),
		]),
		[{ kind: DELETE_KIND, left: "✨", path: [13, 42] }],
	),
);

Deno.test("Prepend key to missing path yields prepended key", () =>
	assertEquals(
		flat([
			prepend13({
				kind: DELETE_KIND,
				left: "✨",
				path: [].values(),
			}),
		]),
		[
			{
				kind: DELETE_KIND,
				left: "✨",
				path: [13],
			},
		],
	),
);
