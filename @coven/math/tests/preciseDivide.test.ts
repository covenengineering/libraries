import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseDivide } from "../preciseDivide.ts";

const preciseDividePositive = preciseDivide(2n, 0n);
const preciseDivideNegative = preciseDivide(-2n, 0n);
const preciseDivideFloat = preciseDivide(2n, -1n);
const preciseDivideNegativeFloat = preciseDivide(-2n, -1n);

Deno.test("1 / 2 = 0.5", () =>
	assertStrictEquals(preciseDividePositive(1n, 0n), precise(5n, -1n)),
);

Deno.test("-1 / 2 = -0.5", () =>
	assertStrictEquals(preciseDividePositive(-1n, 0n), precise(-5n, -1n)),
);

Deno.test("0.1 / 2 = 0.05", () =>
	assertStrictEquals(preciseDividePositive(1n, -1n), precise(5n, -2n)),
);

Deno.test("-0.1 / 2 = 0.05", () =>
	assertStrictEquals(preciseDividePositive(-1n, -1n), precise(-5n, -2n)),
);

Deno.test("1 / -2 = -0.5", () =>
	assertStrictEquals(preciseDivideNegative(1n, 1n), precise(-5n, 0n)),
);

Deno.test("-1 / -2 = 0.5", () =>
	assertStrictEquals(preciseDivideNegative(-1n, 0n), precise(5n, -1n)),
);

Deno.test("0.1 / -2 = 0.05", () =>
	assertStrictEquals(preciseDivideNegative(1n, -1n), precise(-5n, -2n)),
);

Deno.test("-0.1 / -2 = 0.05", () =>
	assertStrictEquals(preciseDivideNegative(-1n, -1n), precise(5n, -2n)),
);

Deno.test("1 / 0.2 = 5", () =>
	assertStrictEquals(preciseDivideFloat(1n, 0n), precise(5n, 0n)),
);

Deno.test("-1 / 0.2 = -5", () =>
	assertStrictEquals(preciseDivideFloat(-1n, 0n), precise(-5n, 0n)),
);

Deno.test("0.1 / 0.2 = 0.5", () =>
	assertStrictEquals(preciseDivideFloat(1n, -1n), precise(5n, -1n)),
);

Deno.test("-0.1 / 0.2 = -0.5", () =>
	assertStrictEquals(preciseDivideFloat(-1n, -1n), precise(-5n, -1n)),
);

Deno.test("1 / -0.2 = -5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(1n, 0n), precise(-5n, 0n)),
);

Deno.test("-1 / -0.2 = 5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(-1n, 0n), precise(5n, 0n)),
);

Deno.test("0.1 / -0.2 = -0.5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(1n, -1n), precise(-5n, -1n)),
);

Deno.test("-0.1 / -0.2 = 0.5", () =>
	assertStrictEquals(preciseDivideNegativeFloat(-1n, -1n), precise(5n, -1n)),
);

Deno.test("5 / 0.00001 = 500000", () =>
	assertStrictEquals(preciseDivide(1n, -5n)(5n, 0n), precise(5n, 5n)),
);

Deno.test("0.00001 / 5 = 0.000002", () =>
	assertStrictEquals(preciseDivide(5n, 0n)(1n, -5n), precise(2n, -6n)),
);

Deno.test("1 / 0 = undefined", () =>
	assertStrictEquals(preciseDivide(0n, 0n)(1n, 0n), undefined),
);

Deno.test("Same Precise returned with same values", () =>
	assertStrictEquals(
		preciseDivide(2n, 0n)(3n, 0n),
		preciseDivide(2n, 0n)(3n, 0n),
	),
);
