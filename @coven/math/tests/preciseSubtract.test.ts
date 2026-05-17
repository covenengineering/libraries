import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_ONE } from "../PRECISE_ONE.ts";
import { PRECISE_ZERO } from "../PRECISE_ZERO.ts";
import { preciseSubtract } from "../preciseSubtract.ts";

const preciseSubtractPositive = preciseSubtract(precise(2n, 0n));
const preciseSubtractNegative = preciseSubtract(precise(-2n, 0n));
const preciseSubtractFloat = preciseSubtract(precise(2n, -1n));
const preciseSubtractNegativeFloat = preciseSubtract(precise(-2n, -1n));

Deno.test("1 - 2 = -1", () =>
	assertStrictEquals(preciseSubtractPositive(PRECISE_ONE), precise(-1n, 0n)),
);

Deno.test("-1 - 2 = -3", () =>
	assertStrictEquals(
		preciseSubtractPositive(precise(-1n, 0n)),
		precise(-3n, 0n),
	),
);

Deno.test("0.1 - 2 = -1.9", () =>
	assertStrictEquals(
		preciseSubtractPositive(precise(1n, -1n)),
		precise(-19n, -1n),
	),
);

Deno.test("-0.1 - 2 = -2.1", () =>
	assertStrictEquals(
		preciseSubtractPositive(precise(-1n, -1n)),
		precise(-21n, -1n),
	),
);

Deno.test("1 - -2 = 3", () =>
	assertStrictEquals(preciseSubtractNegative(PRECISE_ONE), precise(3n, 0n)),
);

Deno.test("-1 - -2 = 1", () =>
	assertStrictEquals(preciseSubtractNegative(precise(-1n, 0n)), PRECISE_ONE),
);

Deno.test("0.1 - -2 = 2.1", () =>
	assertStrictEquals(
		preciseSubtractNegative(precise(1n, -1n)),
		precise(21n, -1n),
	),
);

Deno.test("-0.1 - -2 = 1.9", () =>
	assertStrictEquals(
		preciseSubtractNegative(precise(-1n, -1n)),
		precise(19n, -1n),
	),
);

Deno.test("1 - 0.2 = 0.8", () =>
	assertStrictEquals(preciseSubtractFloat(PRECISE_ONE), precise(8n, -1n)),
);

Deno.test("-1 - 0.2 = -1.2", () =>
	assertStrictEquals(
		preciseSubtractFloat(precise(-1n, 0n)),
		precise(-12n, -1n),
	),
);

Deno.test("0.1 - 0.2 = -0.1", () =>
	assertStrictEquals(
		preciseSubtractFloat(precise(1n, -1n)),
		precise(-1n, -1n),
	),
);

Deno.test("-0.1 - 0.2 = -0.3", () =>
	assertStrictEquals(
		preciseSubtractFloat(precise(-1n, -1n)),
		precise(-3n, -1n),
	),
);

Deno.test("1 - -0.2 = 1.2", () =>
	assertStrictEquals(
		preciseSubtractNegativeFloat(PRECISE_ONE),
		precise(12n, -1n),
	),
);

Deno.test("-1 - -0.2 = -0.8", () =>
	assertStrictEquals(
		preciseSubtractNegativeFloat(precise(-1n, 0n)),
		precise(-8n, -1n),
	),
);

Deno.test("0.1 - -0.2 = 0.3", () =>
	assertStrictEquals(
		preciseSubtractNegativeFloat(precise(1n, -1n)),
		precise(3n, -1n),
	),
);

Deno.test("-0.1 - -0.2 = 0.1", () =>
	assertStrictEquals(
		preciseSubtractNegativeFloat(precise(-1n, -1n)),
		precise(1n, -1n),
	),
);

Deno.test("5 - 0.00001 = 4.99999", () =>
	assertStrictEquals(
		preciseSubtract(precise(1n, -5n))(precise(5n, 0n)),
		precise(499_999n, -5n),
	),
);

Deno.test("0.00001 - 5 = -4.99999", () =>
	assertStrictEquals(
		preciseSubtract(precise(5n, 0n))(precise(1n, -5n)),
		precise(-499_999n, -5n),
	),
);

Deno.test("1 - 1 = 0", () =>
	assertStrictEquals(preciseSubtract(PRECISE_ONE)(PRECISE_ONE), PRECISE_ZERO),
);
