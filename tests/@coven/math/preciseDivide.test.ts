import { precise, preciseDivide } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const preciseDividePositive = preciseDivide(2n);
const preciseDivideNegative = preciseDivide(-2n);
const preciseDivideFloat = preciseDivide(2n, -1n);
const preciseDivideNegativeFloat = preciseDivide(-2n, -1n);

Deno.test("1 / 2 = 0.5", () =>
	assertStrictEquals(preciseDividePositive(1n), precise(5n, -1n)));

Deno.test("-1 / 2 = -0.5", () =>
	assertStrictEquals(preciseDividePositive(-1n), precise(-5n, -1n)));

Deno.test("0.1 / 2 = 0.05", () =>
	assertStrictEquals(preciseDividePositive(1n, -1n), precise(5n, -2n)));

Deno.test("-0.1 / 2 = 0.05", () =>
	assertStrictEquals(preciseDividePositive(-1n, -1n), precise(-5n, -2n)));

Deno.test("1 / -2 = -0.5", () =>
	assertStrictEquals(preciseDivideNegative(1n, 1n), precise(-5n)));

Deno.test("-1 / -2 = 0.5", () =>
	assertStrictEquals(preciseDivideNegative(-1n), precise(5n, -1n)));

Deno.test("0.1 / -2 = 0.05", () =>
	assertStrictEquals(preciseDivideNegative(1n, -1n), precise(-5n, -2n)));

Deno.test("-0.1 / -2 = 0.05", () =>
	assertStrictEquals(preciseDivideNegative(-1n, -1n), precise(5n, -2n)));

Deno.test("1 / 0.2 = 5", () =>
	assertStrictEquals(preciseDivideFloat(1n), precise(5n)));

Deno.test("-1 / 0.2 = -5", () =>
	assertStrictEquals(preciseDivideFloat(-1n), precise(-5n)));

Deno.test("0.1 / 0.2 = 0.5", () =>
	assertStrictEquals(preciseDivideFloat(1n, -1n), precise(5n, -1n)));

Deno.test("-0.1 / 0.2 = -0.5", () =>
	assertStrictEquals(preciseDivideFloat(-1n, -1n), precise(-5n, -1n)));

Deno.test("1 / -0.2 = -5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(1n), precise(-5n)));

Deno.test("-1 / -0.2 = 5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(-1n), precise(5n)));

Deno.test("0.1 / -0.2 = -0.5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(1n, -1n), precise(-5n, -1n)));

Deno.test("-0.1 / -0.2 = 0.5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(-1n, -1n), precise(5n, -1n)));

Deno.test("5 / 0.00001 = 500000", () =>
	assertStrictEquals(preciseDivide(1n, -5n)(5n), precise(5n, 5n)));

Deno.test("0.00001 / 5 = 0.000002", () =>
	assertStrictEquals(preciseDivide(5n)(1n, -5n), precise(2n, -6n)));

Deno.test("1 / 0 = Infinity", () =>
	assertStrictEquals(preciseDivide(0n)(1n), precise(Infinity)));

Deno.test("Same Precise returned with same values", () =>
	assertStrictEquals(preciseDivide(2n)(3n), preciseDivide(2n)(3n)));
