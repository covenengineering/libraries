import { quantity } from "@coven/expression";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"a number 13 and a test string string with added {} and the provided quantity",
	() => assertStrictEquals(quantity(13)("test"), "test{13}"),
);

Deno.test(
	"a number 10, a 13 and a test string string with added {} and the provided quantity",
	() => assertStrictEquals(quantity("10,13")("test"), "test{10,13}"),
);

Deno.test(
	"a number 13, and nothing with a test string string with added {} and the provided quantity",
	() => assertStrictEquals(quantity("13,")("test"), "test{13,}"),
);
