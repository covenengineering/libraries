import { assertStrictEquals } from "@std/assert";
import { undefineNaN } from "../undefineNaN.ts";

Deno.test("Number returns the same number", () =>
	assertStrictEquals(undefineNaN(13), 13),
);

Deno.test("NaN returns undefined", () =>
	assertStrictEquals(undefineNaN(NaN), undefined),
);
