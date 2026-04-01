import { assertEquals } from "@std/assert";
import { undefineNaN } from "../undefineNaN.ts";

Deno.test("Number returns the same number", () =>
	assertEquals(undefineNaN(13), 13),
);

Deno.test("NaN returns undefined", () =>
	assertEquals(undefineNaN(NaN), undefined),
);
