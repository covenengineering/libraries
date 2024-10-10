import { multiply } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const multiplyPositive = multiply(2);
const multiplyNegative = multiply(-2);
const multiplyFloat = multiply(0.2);
const multiplyNegativeFloat = multiply(-0.2);

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
