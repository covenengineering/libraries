import { divide } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const dividePositive = divide(2);
const divideNegative = divide(-2);
const divideFloat = divide(0.2);
const divideNegativeFloat = divide(-0.2);

Deno.test("1 / 2 = 0.5", () => assertStrictEquals(dividePositive(1), 0.5));

Deno.test("-1 / 2 = -0.5", () => assertStrictEquals(dividePositive(-1), -0.5));

Deno.test("0.1 / 2 = 0.05", () =>
	assertStrictEquals(dividePositive(0.1), 0.05));

Deno.test("-0.1 / 2 = -0.05", () =>
	assertStrictEquals(dividePositive(-0.1), -0.05));

Deno.test("1 / -2 = -0.5", () => assertStrictEquals(divideNegative(1), -0.5));

Deno.test("-1 / -2 = 0.5", () => assertStrictEquals(divideNegative(-1), 0.5));

Deno.test("0.1 / -2 = -0.05", () =>
	assertStrictEquals(divideNegative(0.1), -0.05));

Deno.test("-0.1 / -2 = 0.05", () =>
	assertStrictEquals(divideNegative(-0.1), 0.05));

Deno.test("1 / 0.2 = 5", () => assertStrictEquals(divideFloat(1), 5));

Deno.test("-1 / 0.2 = -5", () => assertStrictEquals(divideFloat(-1), -5));

Deno.test("0.1 / 0.2 = 0.5", () => assertStrictEquals(divideFloat(0.1), 0.5));

Deno.test("-0.1 / 0.2 = -0.5", () =>
	assertStrictEquals(divideFloat(-0.1), -0.5));

Deno.test("1 / -0.2 = -5", () =>
	assertStrictEquals(divideNegativeFloat(1), -5));

Deno.test("-1 / -0.2 = 5", () =>
	assertStrictEquals(divideNegativeFloat(-1), 5));

Deno.test("0.1 / -0.2 = -0.5", () =>
	assertStrictEquals(divideNegativeFloat(0.1), -0.5));

Deno.test("-0.1 / -0.2 = 0.5", () =>
	assertStrictEquals(divideNegativeFloat(-0.1), 0.5));

Deno.test("5 / 0.00001 = 500000", () =>
	assertStrictEquals(divide(0.000_01)(5), 500_000));

Deno.test("0.00001 / 5 = 0.000002", () =>
	assertStrictEquals(divide(5)(0.000_01), 0.000_002));
