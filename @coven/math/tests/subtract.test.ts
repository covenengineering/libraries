import { subtract } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const subtractPositive = subtract(2);
const subtractNegative = subtract(-2);
const subtractFloat = subtract(0.2);
const subtractNegativeFloat = subtract(-0.2);

Deno.test("1 - 2 = -1", () => assertStrictEquals(subtractPositive(1), -1));

Deno.test("-1 - 2 = -3", () => assertStrictEquals(subtractPositive(-1), -3));

Deno.test("0.1 - 2 = -1.9", () =>
	assertStrictEquals(subtractPositive(0.1), -1.9));

Deno.test("-0.1 - 2 = -2.1", () =>
	assertStrictEquals(subtractPositive(-0.1), -2.1));

Deno.test("1 - -2 = 3", () => assertStrictEquals(subtractNegative(1), 3));

Deno.test("-1 - -2 = 1", () => assertStrictEquals(subtractNegative(-1), 1));

Deno.test("0.1 - -2 = 2.1", () =>
	assertStrictEquals(subtractNegative(0.1), 2.1));

Deno.test("-0.1 - -2 = 1.9", () =>
	assertStrictEquals(subtractNegative(-0.1), 1.9));

Deno.test("1 - 0.2 = 0.8", () => assertStrictEquals(subtractFloat(1), 0.8));

Deno.test("-1 - 0.2 = -1.2", () => assertStrictEquals(subtractFloat(-1), -1.2));

Deno.test("0.1 - 0.2 = -0.1", () =>
	assertStrictEquals(subtractFloat(0.1), -0.1));

Deno.test("-0.1 - 0.2 = -0.3", () =>
	assertStrictEquals(subtractFloat(-0.1), -0.3));

Deno.test("1 - -0.2 = 1.2", () =>
	assertStrictEquals(subtractNegativeFloat(1), 1.2));

Deno.test("-1 - -0.2 = -0.8", () =>
	assertStrictEquals(subtractNegativeFloat(-1), -0.8));

Deno.test("0.1 - -0.2 = 0.3", () =>
	assertStrictEquals(subtractNegativeFloat(0.1), 0.3));

Deno.test("-0.1 - -0.2 = 0.1", () =>
	assertStrictEquals(subtractNegativeFloat(-0.1), 0.1));

Deno.test("5 - 0.00001 = 4.99999", () =>
	assertStrictEquals(subtract(0.000_01)(5), 4.999_99));

Deno.test("0.00001 - 5 = -4.99999", () =>
	assertStrictEquals(subtract(5)(0.000_01), -4.999_99));
