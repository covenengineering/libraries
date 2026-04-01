import { assertStringIncludes } from "@std/assert";
import { allow } from "../allow.ts";

Deno.test("Number 13 adds a star to the right", () =>
	assertStringIncludes(allow(13), "13*"),
);

Deno.test("Number 1 and number 3 adds a star to the right", () =>
	assertStringIncludes(allow(1, 3), "13*"),
);
