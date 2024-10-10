import { captureType } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"a {TEST} string a number 13 add capture type group {TEST} around 13",
	() => assertStrictEquals(captureType("{TEST}")(13), "(?{TEST}13)"),
);

Deno.test(
	"a {TEST} string a number 1 and a 3 add capture type group {TEST} around 13",
	() => assertStrictEquals(captureType("{TEST}")(1, 3), "(?{TEST}13)"),
);
