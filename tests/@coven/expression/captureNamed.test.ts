import { captureNamed } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	'Group named "test" and a number 13 adds an escape sequence to the left',
	() => assertStrictEquals(captureNamed("test")(13), "(?<test>13)"),
);

Deno.test(
	'Group named "test" and a number 1, and number 3 adds an escape sequence to the left',
	() => assertStrictEquals(captureNamed("test")(1, 3), "(?<test>13)"),
);
