import { capturePrevious } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test("a number 13 add capture previous group around it", () =>
	assertStrictEquals(capturePrevious(13), "(?<=13)"),
);

Deno.test("a number 1, and a 3 add capture previous group around it", () =>
	assertStrictEquals(capturePrevious(1, 3), "(?<=13)"),
);
