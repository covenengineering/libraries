import { precise, preciseMultiply } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const preciseMultiplyPositive = preciseMultiply(2n);
const preciseMultiplyNegative = preciseMultiply(-2n);
const preciseMultiplyFloat = preciseMultiply(2n, -1n);
const preciseMultiplyNegativeFloat = preciseMultiply(-2n, -1n);

Deno.test("1 * 2 = 2", () =>
	assertStrictEquals(preciseMultiplyPositive(1n), precise(2n)),
);

Deno.test("-1 * 2 = -2", () =>
	assertStrictEquals(preciseMultiplyPositive(-1n), precise(-2n)),
);

Deno.test("0.1 * 2 = 0.2", () =>
	assertStrictEquals(preciseMultiplyPositive(1n, -1n), precise(2n, -1n)),
);

Deno.test("-0.1 * 2 = -0.2", () =>
	assertStrictEquals(preciseMultiplyPositive(-1n, -1n), precise(-2n, -1n)),
);

Deno.test("1 * -2 = -2", () =>
	assertStrictEquals(preciseMultiplyNegative(1n), precise(-2n)),
);

Deno.test("-1 * -2 = 2", () =>
	assertStrictEquals(preciseMultiplyNegative(-1n), precise(2n)),
);

Deno.test("0.1 * -2 = -0.2", () =>
	assertStrictEquals(preciseMultiplyNegative(1n, -1n), precise(-2n, -1n)),
);

Deno.test("-0.1 * -2 = 0.2", () =>
	assertStrictEquals(preciseMultiplyNegative(-1n, -1n), precise(2n, -1n)),
);

Deno.test("1 * 0.2 = 0.2", () =>
	assertStrictEquals(preciseMultiplyFloat(1n), precise(2n, -1n)),
);

Deno.test("-1 * 0.2 = -0.2", () =>
	assertStrictEquals(preciseMultiplyFloat(-1n), precise(-2n, -1n)),
);

Deno.test("0.1 * 0.2 = 0.02", () =>
	assertStrictEquals(preciseMultiplyFloat(1n, -1n), precise(2n, -2n)),
);

Deno.test("-0.1 * 0.2 = -0.02", () =>
	assertStrictEquals(preciseMultiplyFloat(-1n, -1n), precise(-2n, -2n)),
);

Deno.test("1 * -0.2 = -0.2", () =>
	assertStrictEquals(preciseMultiplyNegativeFloat(1n), precise(-2n, -1n)),
);

Deno.test("-1 * -0.2 = 0.2", () =>
	assertStrictEquals(preciseMultiplyNegativeFloat(-1n), precise(2n, -1n)),
);

Deno.test("0.1 * -0.2 = -0.02", () =>
	assertStrictEquals(
		preciseMultiplyNegativeFloat(1n, -1n),
		precise(-2n, -2n),
	),
);

Deno.test("-0.1 * -0.2 = 0.02", () =>
	assertStrictEquals(
		preciseMultiplyNegativeFloat(-1n, -1n),
		precise(2n, -2n),
	),
);

Deno.test("5 * 0.00001 = 0.00005", () =>
	assertStrictEquals(preciseMultiply(1n, -5n)(5n), precise(5n, -5n)),
);

Deno.test("0.00001 * 5 = 0.00005", () =>
	assertStrictEquals(preciseMultiply(5n)(1n, -5n), precise(5n, -5n)),
);

Deno.test("Infinity * Infinity = [Infinity]", () =>
	assertStrictEquals(preciseMultiply(Infinity)(Infinity), precise(Infinity)),
);

Deno.test("13 * Infinity = [Infinity]", () =>
	assertStrictEquals(preciseMultiply(Infinity)(13), precise(Infinity)),
);

Deno.test("Same Precise returned with same values", () =>
	assertStrictEquals(preciseMultiply(2n)(3n), preciseMultiply(2n)(3n)),
);
