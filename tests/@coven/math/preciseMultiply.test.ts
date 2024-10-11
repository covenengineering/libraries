import { preciseMultiply } from "@coven/math";
import { assertEquals } from "@std/assert";

const preciseMultiplyPositive = preciseMultiply(2n);
const preciseMultiplyNegative = preciseMultiply(-2n);
const preciseMultiplyFloat = preciseMultiply(2n, -1n);
const preciseMultiplyNegativeFloat = preciseMultiply(-2n, -1n);

Deno.test("1 * 2 = 2", () => assertEquals(preciseMultiplyPositive(1n), [2n]));

Deno.test("-1 * 2 = -2", () =>
	assertEquals(preciseMultiplyPositive(-1n), [-2n]));

Deno.test("0.1 * 2 = 0.2", () =>
	assertEquals(preciseMultiplyPositive(1n, -1n), [2n, -1n]));

Deno.test("-0.1 * 2 = -0.2", () =>
	assertEquals(preciseMultiplyPositive(-1n, -1n), [-2n, -1n]));

Deno.test("1 * -2 = -2", () =>
	assertEquals(preciseMultiplyNegative(1n), [-2n]));

Deno.test("-1 * -2 = 2", () =>
	assertEquals(preciseMultiplyNegative(-1n), [2n]));

Deno.test("0.1 * -2 = -0.2", () =>
	assertEquals(preciseMultiplyNegative(1n, -1n), [-2n, -1n]));

Deno.test("-0.1 * -2 = 0.2", () =>
	assertEquals(preciseMultiplyNegative(-1n, -1n), [2n, -1n]));

Deno.test("1 * 0.2 = 0.2", () =>
	assertEquals(preciseMultiplyFloat(1n), [2n, -1n]));

Deno.test("-1 * 0.2 = -0.2", () =>
	assertEquals(preciseMultiplyFloat(-1n), [-2n, -1n]));

Deno.test("0.1 * 0.2 = 0.02", () =>
	assertEquals(preciseMultiplyFloat(1n, -1n), [2n, -2n]));

Deno.test("-0.1 * 0.2 = -0.02", () =>
	assertEquals(preciseMultiplyFloat(-1n, -1n), [-2n, -2n]));

Deno.test("1 * -0.2 = -0.2", () =>
	assertEquals(preciseMultiplyNegativeFloat(1n), [-2n, -1n]));

Deno.test("-1 * -0.2 = 0.2", () =>
	assertEquals(preciseMultiplyNegativeFloat(-1n), [2n, -1n]));

Deno.test("0.1 * -0.2 = -0.02", () =>
	assertEquals(preciseMultiplyNegativeFloat(1n, -1n), [-2n, -2n]));

Deno.test("-0.1 * -0.2 = 0.02", () =>
	assertEquals(preciseMultiplyNegativeFloat(-1n, -1n), [2n, -2n]));

Deno.test("5 * 0.00001 = 0.00005", () =>
	assertEquals(preciseMultiply(1n, -5n)(5n), [5n, -5n]));

Deno.test("0.00001 * 5 = 0.00005", () =>
	assertEquals(preciseMultiply(5n)(1n, -5n), [5n, -5n]));

Deno.test("Infinity * Infinity = [Infinity]", () =>
	assertEquals(preciseMultiply(Infinity)(Infinity), [Infinity]));

Deno.test("13 * Infinity = [Infinity]", () =>
	assertEquals(preciseMultiply(Infinity)(13), [Infinity]));
