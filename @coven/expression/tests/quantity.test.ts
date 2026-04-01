import { assertStrictEquals } from "@std/assert";
import { quantity } from "../quantity.ts";

Deno.test(
	'Number 13 and a "test" string adds {} and the provided quantity',
	() => assertStrictEquals(quantity(13)("test"), "test{13}"),
);

Deno.test(
	'Number 10, a 13 and a "test" string adds {} and the provided quantity',
	() => assertStrictEquals(quantity("10,13")("test"), "test{10,13}"),
);

Deno.test(
	'Number 13, and nothing with a "test" string adds {} and the provided quantity',
	() => assertStrictEquals(quantity("13,")("test"), "test{13,}"),
);
