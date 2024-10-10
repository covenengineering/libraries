import { captureNamed } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"a group name test and a number 13 add an escape sequence to the left",
	() => assertStrictEquals(captureNamed("test")(13), "(?<test>13)"),
);
