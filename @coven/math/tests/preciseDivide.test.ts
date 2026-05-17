import { assertStrictEquals } from "@std/assert";
import { EXPONENT_MIN } from "../EXPONENT_MIN.ts";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { PRECISE_ONE } from "../PRECISE_ONE.ts";
import { PRECISE_ZERO } from "../PRECISE_ZERO.ts";
import { preciseDivide } from "../preciseDivide.ts";

const preciseDividePositive = preciseDivide(precise(2n, 0n));
const preciseDivideNegative = preciseDivide(precise(-2n, 0n));
const preciseDivideFloat = preciseDivide(precise(2n, -1n));
const preciseDivideNegativeFloat = preciseDivide(precise(-2n, -1n));

Deno.test("1 / 2 = 0.5", () =>
	assertStrictEquals(preciseDividePositive(PRECISE_ONE), precise(5n, -1n)),
);

Deno.test("-1 / 2 = -0.5", () =>
	assertStrictEquals(
		preciseDividePositive(precise(-1n, 0n)),
		precise(-5n, -1n),
	),
);

Deno.test("0.1 / 2 = 0.05", () =>
	assertStrictEquals(
		preciseDividePositive(precise(1n, -1n)),
		precise(5n, -2n),
	),
);

Deno.test("-0.1 / 2 = 0.05", () =>
	assertStrictEquals(
		preciseDividePositive(precise(-1n, -1n)),
		precise(-5n, -2n),
	),
);

Deno.test("1 / -2 = -0.5", () =>
	assertStrictEquals(
		preciseDivideNegative(precise(1n, 1n)),
		precise(-5n, 0n),
	),
);

Deno.test("-1 / -2 = 0.5", () =>
	assertStrictEquals(
		preciseDivideNegative(precise(-1n, 0n)),
		precise(5n, -1n),
	),
);

Deno.test("0.1 / -2 = 0.05", () =>
	assertStrictEquals(
		preciseDivideNegative(precise(1n, -1n)),
		precise(-5n, -2n),
	),
);

Deno.test("-0.1 / -2 = 0.05", () =>
	assertStrictEquals(
		preciseDivideNegative(precise(-1n, -1n)),
		precise(5n, -2n),
	),
);

Deno.test("1 / 0.2 = 5", () =>
	assertStrictEquals(preciseDivideFloat(PRECISE_ONE), precise(5n, 0n)),
);

Deno.test("-1 / 0.2 = -5", () =>
	assertStrictEquals(preciseDivideFloat(precise(-1n, 0n)), precise(-5n, 0n)),
);

Deno.test("0.1 / 0.2 = 0.5", () =>
	assertStrictEquals(preciseDivideFloat(precise(1n, -1n)), precise(5n, -1n)),
);

Deno.test("-0.1 / 0.2 = -0.5", () =>
	assertStrictEquals(
		preciseDivideFloat(precise(-1n, -1n)),
		precise(-5n, -1n),
	),
);

Deno.test("1 / -0.2 = -5", () =>
	assertStrictEquals(
		preciseDivideNegativeFloat(PRECISE_ONE),
		precise(-5n, 0n),
	),
);

Deno.test("-1 / -0.2 = 5", () =>
	assertStrictEquals(
		preciseDivideNegativeFloat(precise(-1n, 0n)),
		precise(5n, 0n),
	),
);

Deno.test("0.1 / -0.2 = -0.5", () =>
	assertStrictEquals(
		preciseDivideNegativeFloat(precise(1n, -1n)),
		precise(-5n, -1n),
	),
);

Deno.test("-0.1 / -0.2 = 0.5", () =>
	assertStrictEquals(
		preciseDivideNegativeFloat(precise(-1n, -1n)),
		precise(5n, -1n),
	),
);

Deno.test("5 / 0.00001 = 500000", () =>
	assertStrictEquals(
		preciseDivide(precise(1n, -5n))(precise(5n, 0n)),
		precise(5n, 5n),
	),
);

Deno.test("0.00001 / 5 = 0.000002", () =>
	assertStrictEquals(
		preciseDivide(precise(5n, 0n))(precise(1n, -5n)),
		precise(2n, -6n),
	),
);

Deno.test("1 / 0 = Infinity", () =>
	assertStrictEquals(preciseDivide(PRECISE_ZERO)(PRECISE_ONE), PRECISE_NAN),
);

Deno.test("0 / 2 = 0", () =>
	assertStrictEquals(
		preciseDivide(precise(2n, 0n))(PRECISE_ZERO),
		PRECISE_ZERO,
	),
);

Deno.test(
	"1 / 3 = 0.33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334",
	() =>
		assertStrictEquals(
			preciseDivide(precise(3n, 0n))(PRECISE_ONE),
			precise(
				33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334n,
				EXPONENT_MIN,
			),
		),
);

Deno.test(
	"22 / 7 = 3.14285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285715",
	() =>
		assertStrictEquals(
			preciseDivide(precise(7n, 0n))(precise(22n, 0n)),
			precise(
				314285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285715n,
				EXPONENT_MIN,
			),
		),
);

Deno.test(
	"103993 / 33102 = 3.14159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996134",
	() =>
		assertStrictEquals(
			preciseDivide(precise(33102n, 0n))(precise(103993n, 0n)),
			precise(
				314159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996133164159265301190260407226149477372968400700863996134n,
				EXPONENT_MIN,
			),
		),
);
