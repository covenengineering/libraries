import { preciseSubtract } from "@coven/math";
import { assertEquals } from "@std/assert";

const preciseSubtractPositive = preciseSubtract(2n);
const preciseSubtractNegative = preciseSubtract(-2n);
const preciseSubtractFloat = preciseSubtract(2n, -1n);
const preciseSubtractNegativeFloat = preciseSubtract(-2n, -1n);

Deno.test("1 - 2 = -1", () => assertEquals(preciseSubtractPositive(1n), [-1n]));

Deno.test("-1 - 2 = -3", () =>
	assertEquals(preciseSubtractPositive(-1n), [-3n]));

Deno.test("0.1 - 2 = -1.9", () =>
	assertEquals(preciseSubtractPositive(1n, -1n), [-19n, -1n]));

Deno.test("-0.1 - 2 = -2.1", () =>
	assertEquals(preciseSubtractPositive(-1n, -1n), [-21n, -1n]));

Deno.test("1 - -2 = 3", () => assertEquals(preciseSubtractNegative(1n), [3n]));

Deno.test("-1 - -2 = 1", () =>
	assertEquals(preciseSubtractNegative(-1n), [1n]));

Deno.test("0.1 - -2 = 2.1", () =>
	assertEquals(preciseSubtractNegative(1n, -1n), [21n, -1n]));

Deno.test("-0.1 - -2 = 1.9", () =>
	assertEquals(preciseSubtractNegative(-1n, -1n), [19n, -1n]));

Deno.test("1 - 0.2 = 0.8", () =>
	assertEquals(preciseSubtractFloat(1n), [8n, -1n]));

Deno.test("-1 - 0.2 = -1.2", () =>
	assertEquals(preciseSubtractFloat(-1n), [-12n, -1n]));

Deno.test("0.1 - 0.2 = -0.1", () =>
	assertEquals(preciseSubtractFloat(1n, -1n), [-1n, -1n]));

Deno.test("-0.1 - 0.2 = -0.3", () =>
	assertEquals(preciseSubtractFloat(-1n, -1n), [-3n, -1n]));

Deno.test("1 - -0.2 = 1.2", () =>
	assertEquals(preciseSubtractNegativeFloat(1n), [12n, -1n]));

Deno.test("-1 - -0.2 = -0.8", () =>
	assertEquals(preciseSubtractNegativeFloat(-1n), [-8n, -1n]));

Deno.test("0.1 - -0.2 = 0.3", () =>
	assertEquals(preciseSubtractNegativeFloat(1n, -1n), [3n, -1n]));

Deno.test("-0.1 - -0.2 = 0.1", () =>
	assertEquals(preciseSubtractNegativeFloat(-1n, -1n), [1n, -1n]));

Deno.test("5 - 0.00001 = 4.99999", () =>
	assertEquals(preciseSubtract(1n, -5n)(5n), [499_999n, -5n]));

Deno.test("0.00001 - 5 = -4.99999", () =>
	assertEquals(preciseSubtract(5n)(1n, -5n), [-499_999n, -5n]));
