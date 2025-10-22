import { hexadecimal } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"Number 13 in hexadecimal adds an x escape sequence to the left",
	() => assertStrictEquals(hexadecimal("0D"), String.raw`\x0D`),
);
