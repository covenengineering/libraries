import { captureNamed } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	'Group named "test" and a number 13 adds an escape sequence to the left',
	() => assertStrictEquals(captureNamed("test")(13), "(?<test>13)"),
);
