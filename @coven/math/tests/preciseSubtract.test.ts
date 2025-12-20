import { precise, preciseSubtract } from "@coven/math";
import { assertStrictEquals } from "@std/assert";

const preciseSubtractPositive = preciseSubtract(2n);
const preciseSubtractNegative = preciseSubtract(-2n);
const preciseSubtractFloat = preciseSubtract(2n, -1n);
const preciseSubtractNegativeFloat = preciseSubtract(-2n, -1n);

Deno.test("1 - 2 = -1", () =>
	assertStrictEquals(preciseSubtractPositive(1n), precise(-1n)),
);

Deno.test("-1 - 2 = -3", () =>
	assertStrictEquals(preciseSubtractPositive(-1n), precise(-3n)),
);

Deno.test("0.1 - 2 = -1.9", () =>
	assertStrictEquals(preciseSubtractPositive(1n, -1n), precise(-19n, -1n)),
);

Deno.test("-0.1 - 2 = -2.1", () =>
	assertStrictEquals(preciseSubtractPositive(-1n, -1n), precise(-21n, -1n)),
);

Deno.test("1 - -2 = 3", () =>
	assertStrictEquals(preciseSubtractNegative(1n), precise(3n)),
);

Deno.test("-1 - -2 = 1", () =>
	assertStrictEquals(preciseSubtractNegative(-1n), precise(1n)),
);

Deno.test("0.1 - -2 = 2.1", () =>
	assertStrictEquals(preciseSubtractNegative(1n, -1n), precise(21n, -1n)),
);

Deno.test("-0.1 - -2 = 1.9", () =>
	assertStrictEquals(preciseSubtractNegative(-1n, -1n), precise(19n, -1n)),
);

Deno.test("1 - 0.2 = 0.8", () =>
	assertStrictEquals(preciseSubtractFloat(1n), precise(8n, -1n)),
);

Deno.test("-1 - 0.2 = -1.2", () =>
	assertStrictEquals(preciseSubtractFloat(-1n), precise(-12n, -1n)),
);

Deno.test("0.1 - 0.2 = -0.1", () =>
	assertStrictEquals(preciseSubtractFloat(1n, -1n), precise(-1n, -1n)),
);

Deno.test("-0.1 - 0.2 = -0.3", () =>
	assertStrictEquals(preciseSubtractFloat(-1n, -1n), precise(-3n, -1n)),
);

Deno.test("1 - -0.2 = 1.2", () =>
	assertStrictEquals(preciseSubtractNegativeFloat(1n), precise(12n, -1n)),
);

Deno.test("-1 - -0.2 = -0.8", () =>
	assertStrictEquals(preciseSubtractNegativeFloat(-1n), precise(-8n, -1n)),
);

Deno.test("0.1 - -0.2 = 0.3", () =>
	assertStrictEquals(preciseSubtractNegativeFloat(1n, -1n), precise(3n, -1n)),
);

Deno.test("-0.1 - -0.2 = 0.1", () =>
	assertStrictEquals(
		preciseSubtractNegativeFloat(-1n, -1n),
		precise(1n, -1n),
	),
);

Deno.test("5 - 0.00001 = 4.99999", () =>
	assertStrictEquals(preciseSubtract(1n, -5n)(5n), precise(499_999n, -5n)),
);

Deno.test("0.00001 - 5 = -4.99999", () =>
	assertStrictEquals(preciseSubtract(5n)(1n, -5n), precise(-499_999n, -5n)),
);

Deno.test("Same Precise returned with same values", () =>
	assertStrictEquals(preciseSubtract(2n)(3n), preciseSubtract(2n)(3n)),
);
