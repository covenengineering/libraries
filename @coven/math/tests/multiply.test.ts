import { assertStrictEquals } from "@std/assert";
import { multiply } from "../multiply.ts";

const multiplyPositive = multiply(2);
const multiplyNegative = multiply(-2);
const multiplyFloat = multiply(0.2);
const multiplyNegativeFloat = multiply(-0.2);
const multiplyInfinity = multiply(Infinity);
const multiplyNaN = multiply(NaN);

Deno.test("1 * 2 = 2", () => assertStrictEquals(multiplyPositive(1), 2));

Deno.test("-1 * 2 = -2", () => assertStrictEquals(multiplyPositive(-1), -2));

Deno.test("0.1 * 2 = 0.2", () =>
	assertStrictEquals(multiplyPositive(0.1), 0.2),
);

Deno.test("-0.1 * 2 = -0.2", () =>
	assertStrictEquals(multiplyPositive(-0.1), -0.2),
);

Deno.test("1 * -2 = -2", () => assertStrictEquals(multiplyNegative(1), -2));

Deno.test("-1 * -2 = 2", () => assertStrictEquals(multiplyNegative(-1), 2));

Deno.test("0.1 * -2 = -0.2", () =>
	assertStrictEquals(multiplyNegative(0.1), -0.2),
);

Deno.test("-0.1 * -2 = 0.2", () =>
	assertStrictEquals(multiplyNegative(-0.1), 0.2),
);

Deno.test("1 * 0.2 = 0.2", () => assertStrictEquals(multiplyFloat(1), 0.2));

Deno.test("-1 * 0.2 = -0.2", () => assertStrictEquals(multiplyFloat(-1), -0.2));

Deno.test("0.1 * 0.2 = 0.02", () =>
	assertStrictEquals(multiplyFloat(0.1), 0.02),
);

Deno.test("-0.1 * 0.2 = -0.02", () =>
	assertStrictEquals(multiplyFloat(-0.1), -0.02),
);

Deno.test("1 * -0.2 = -0.2", () =>
	assertStrictEquals(multiplyNegativeFloat(1), -0.2),
);

Deno.test("-1 * -0.2 = 0.2", () =>
	assertStrictEquals(multiplyNegativeFloat(-1), 0.2),
);

Deno.test("0.1 * -0.2 = -0.02", () =>
	assertStrictEquals(multiplyNegativeFloat(0.1), -0.02),
);

Deno.test("-0.1 * -0.2 = 0.02", () =>
	assertStrictEquals(multiplyNegativeFloat(-0.1), 0.02),
);

Deno.test("5 * 0.00001 = 0.00005", () =>
	assertStrictEquals(multiply(0.000_01)(5), 0.000_05),
);

Deno.test("0.00001 * 5 = 0.00005", () =>
	assertStrictEquals(multiply(5)(0.000_01), 0.000_05),
);

Deno.test("Infinity * Infinity = Infinity", () =>
	assertStrictEquals(multiply(Infinity)(Infinity), Infinity),
);

Deno.test("13 * Infinity = Infinity", () =>
	assertStrictEquals(multiply(Infinity)(13), Infinity),
);

Deno.test("Infinity * 2 = Infinity", () =>
	assertStrictEquals(multiplyPositive(Infinity), Infinity),
);

Deno.test("NaN * 2 = NaN", () =>
	assertStrictEquals(multiplyPositive(NaN), NaN),
);

Deno.test("Infinity * Infinity = Infinity", () =>
	assertStrictEquals(multiplyInfinity(Infinity), Infinity),
);

Deno.test("2 * Infinity = Infinity", () =>
	assertStrictEquals(multiplyInfinity(2), Infinity),
);

Deno.test("NaN * Infinity = NaN", () =>
	assertStrictEquals(multiplyInfinity(NaN), NaN),
);

Deno.test("NaN * NaN = NaN", () => assertStrictEquals(multiplyNaN(NaN), NaN));

Deno.test("2 * NaN = NaN", () => assertStrictEquals(multiplyNaN(2), NaN));

Deno.test("Infinity * NaN = NaN", () =>
	assertStrictEquals(multiplyNaN(Infinity), NaN),
);
