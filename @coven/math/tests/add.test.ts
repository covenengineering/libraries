import { assertStrictEquals } from "@std/assert";
import { add } from "../add.ts";

const addPositive = add(2);
const addNegative = add(-2);
const addFloat = add(0.2);
const addNegativeFloat = add(-0.2);
const addInfinity = add(Infinity);
const addNaN = add(NaN);

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

Deno.test("Infinity + 2 = Infinity", () =>
	assertStrictEquals(addPositive(Infinity), Infinity),
);

Deno.test("NaN + 2 = NaN", () => assertStrictEquals(addPositive(NaN), NaN));

Deno.test("Infinity + Infinity = Infinity", () =>
	assertStrictEquals(addInfinity(Infinity), Infinity),
);

Deno.test("2 + Infinity = Infinity", () =>
	assertStrictEquals(addInfinity(2), Infinity),
);

Deno.test("NaN + Infinity = NaN", () =>
	assertStrictEquals(addInfinity(NaN), NaN),
);

Deno.test("NaN + NaN = NaN", () => assertStrictEquals(addNaN(NaN), NaN));

Deno.test("2 + NaN = NaN", () => assertStrictEquals(addNaN(2), NaN));

Deno.test("Infinity + NaN = NaN", () =>
	assertStrictEquals(addNaN(Infinity), NaN),
);
