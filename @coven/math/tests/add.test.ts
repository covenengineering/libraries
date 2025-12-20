import { add } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const addPositive = add(2);
const addNegative = add(-2);
const addFloat = add(0.2);
const addNegativeFloat = add(-0.2);

Deno.test("1 + 2 = 3", () => assertStrictEquals(addPositive(1), 3));

Deno.test("-1 + 2 = 1", () => assertStrictEquals(addPositive(-1), 1));

Deno.test("0.1 + 2 = 2.1", () => assertStrictEquals(addPositive(0.1), 2.1));

Deno.test("-0.1 + 2 = 1.9", () => assertStrictEquals(addPositive(-0.1), 1.9));

Deno.test("1 + -2 = -1", () => assertStrictEquals(addNegative(1), -1));

Deno.test("-1 + -2 = -3", () => assertStrictEquals(addNegative(-1), -3));

Deno.test("0.1 + -2 = -1.9", () => assertStrictEquals(addNegative(0.1), -1.9));

Deno.test("-0.1 + -2 = -2.1", () =>
	assertStrictEquals(addNegative(-0.1), -2.1),
);

Deno.test("1 + 0.2 = 1.2", () => assertStrictEquals(addFloat(1), 1.2));

Deno.test("-1 + 0.2 = -0.8", () => assertStrictEquals(addFloat(-1), -0.8));

Deno.test("0.1 + 0.2 = 0.3", () => assertStrictEquals(addFloat(0.1), 0.3));

Deno.test("-0.1 + 0.2 = 0.1", () => assertStrictEquals(addFloat(-0.1), 0.1));

Deno.test("1 + -0.2 = 0.8", () => assertStrictEquals(addNegativeFloat(1), 0.8));

Deno.test("-1 + -0.2 = -1.2", () =>
	assertStrictEquals(addNegativeFloat(-1), -1.2),
);

Deno.test("0.1 + -0.2 = -0.1", () =>
	assertStrictEquals(addNegativeFloat(0.1), -0.1),
);

Deno.test("-0.1 + -0.2 = -0.3", () =>
	assertStrictEquals(addNegativeFloat(-0.1), -0.3),
);

Deno.test("5 + 0.00001 = 5.00001", () =>
	assertStrictEquals(add(0.000_01)(5), 5.000_01),
);

Deno.test("0.00001 + 5 = 5.00001", () =>
	assertStrictEquals(add(5)(0.000_01), 5.000_01),
);
