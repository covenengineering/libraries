import { precise, preciseAdd } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const preciseAddPositive = preciseAdd(2n);
const preciseAddNegative = preciseAdd(-2n);
const preciseAddFloat = preciseAdd(2n, -1n);
const preciseAddNegativeFloat = preciseAdd(-2n, -1n);

Deno.test("1 + 2 = 3", () =>
	assertStrictEquals(preciseAddPositive(1n), precise(3n)),
);

Deno.test("-1 + 2 = 1", () =>
	assertStrictEquals(preciseAddPositive(-1n), precise(1n)),
);

Deno.test("0.1 + 2 = 2.1", () =>
	assertStrictEquals(preciseAddPositive(1n, -1n), precise(21n, -1n)),
);

Deno.test("-0.1 + 2 = 1.9", () =>
	assertStrictEquals(preciseAddPositive(-1n, -1n), precise(19n, -1n)),
);

Deno.test("1 + -2 = -1", () =>
	assertStrictEquals(preciseAddNegative(1n), precise(-1n)),
);

Deno.test("-1 + -2 = -3", () =>
	assertStrictEquals(preciseAddNegative(-1n), precise(-3n)),
);

Deno.test("0.1 + -2 = -1.9", () =>
	assertStrictEquals(preciseAddNegative(1n, -1n), precise(-19n, -1n)),
);

Deno.test("-0.1 + -2 = -2.1", () =>
	assertStrictEquals(preciseAddNegative(-1n, -1n), precise(-21n, -1n)),
);

Deno.test("1 + 0.2 = 1.2", () =>
	assertStrictEquals(preciseAddFloat(1n), precise(12n, -1n)),
);

Deno.test("-1 + 0.2 = -0.8", () =>
	assertStrictEquals(preciseAddFloat(-1n), precise(-8n, -1n)),
);

Deno.test("0.1 + 0.2 = 0.3", () =>
	assertStrictEquals(preciseAddFloat(1n, -1n), precise(3n, -1n)),
);

Deno.test("-0.1 + 0.2 = 0.1", () =>
	assertStrictEquals(preciseAddFloat(-1n, -1n), precise(1n, -1n)),
);

Deno.test("1 + -0.2 = 0.8", () =>
	assertStrictEquals(preciseAddNegativeFloat(1n), precise(8n, -1n)),
);

Deno.test("-1 + -0.2 = -1.2", () =>
	assertStrictEquals(preciseAddNegativeFloat(-1n), precise(-12n, -1n)),
);

Deno.test("0.1 + -0.2 = -0.1", () =>
	assertStrictEquals(preciseAddNegativeFloat(1n, -1n), precise(-1n, -1n)),
);

Deno.test("-0.1 + -0.2 = -0.3", () =>
	assertStrictEquals(preciseAddNegativeFloat(-1n, -1n), precise(-3n, -1n)),
);

Deno.test("5 + 0.00001 = 5.00001", () =>
	assertStrictEquals(preciseAdd(1n, -5n)(5n), precise(500_001n, -5n)),
);

Deno.test("0.00001 + 5 = 5.00001", () =>
	assertStrictEquals(preciseAdd(5n)(1n, -5n), precise(500_001n, -5n)),
);

Deno.test("Same Precise returned with same values", () =>
	assertStrictEquals(preciseAdd(2n)(3n), preciseAdd(2n)(3n)),
);
