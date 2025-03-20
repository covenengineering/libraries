import { preciseToNumber } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

Deno.test(
	"Tuple of a positive integer without zeroes on the right returns a number",
	() => assertStrictEquals(preciseToNumber(13n), 13),
);

Deno.test(
	"Tuple of a positive integer with zeroes on the right returns a number",
	() => assertStrictEquals(preciseToNumber(13n, 2n), 1300),
);

Deno.test(
	"Tuple of a negative integer without zeroes on the right returns a number",
	() => assertStrictEquals(preciseToNumber(-13n), -13),
);

Deno.test(
	"Tuple of a negative integer with zeroes on the right returns a number",
	() => assertStrictEquals(preciseToNumber(-13n, 2n), -1300),
);

Deno.test(
	"Tuple of a positive float without zeroes on the right returns a number",
	() => assertStrictEquals(preciseToNumber(131n, -1n), 13.1),
);

Deno.test(
	"Tuple of a positive float with zeroes on the right returns a number",
	() => assertStrictEquals(preciseToNumber(13_001n, -1n), 1300.1),
);

Deno.test(
	"Tuple of a negative float without zeroes on the right returns number",
	() => assertStrictEquals(preciseToNumber(-131n, -1n), -13.1),
);

Deno.test(
	"Tuple of a negative float with zeroes on the right returns a number",
	() => assertStrictEquals(preciseToNumber(-13_001n, -1n), -1300.1),
);

Deno.test("Tuple of not normalized values returns number", () =>
	assertStrictEquals(preciseToNumber(-13_000n, 0n), -13_000),
);
