import { hexadecimal } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"a number 13 in hexadecimal add a x escape sequence to the left",
	() => assertStrictEquals(hexadecimal("0D"), String.raw`\x0D`),
);
