import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_ONE } from "../PRECISE_ONE.ts";
import { preciseMultiply } from "../preciseMultiply.ts";

const preciseMultiplyPositive = preciseMultiply(precise(2n, 0n));
const preciseMultiplyNegative = preciseMultiply(precise(-2n, 0n));
const preciseMultiplyFloat = preciseMultiply(precise(2n, -1n));
const preciseMultiplyNegativeFloat = preciseMultiply(precise(-2n, -1n));

Deno.test("1 * 2 = 2", () =>
	assertStrictEquals(preciseMultiplyPositive(PRECISE_ONE), precise(2n, 0n)),
);

Deno.test("-1 * 2 = -2", () =>
	assertStrictEquals(
		preciseMultiplyPositive(precise(-1n, 0n)),
		precise(-2n, 0n),
	),
);

Deno.test("0.1 * 2 = 0.2", () =>
	assertStrictEquals(
		preciseMultiplyPositive(precise(1n, -1n)),
		precise(2n, -1n),
	),
);

Deno.test("-0.1 * 2 = -0.2", () =>
	assertStrictEquals(
		preciseMultiplyPositive(precise(-1n, -1n)),
		precise(-2n, -1n),
	),
);

Deno.test("1 * -2 = -2", () =>
	assertStrictEquals(preciseMultiplyNegative(PRECISE_ONE), precise(-2n, 0n)),
);

Deno.test("-1 * -2 = 2", () =>
	assertStrictEquals(
		preciseMultiplyNegative(precise(-1n, 0n)),
		precise(2n, 0n),
	),
);

Deno.test("0.1 * -2 = -0.2", () =>
	assertStrictEquals(
		preciseMultiplyNegative(precise(1n, -1n)),
		precise(-2n, -1n),
	),
);

Deno.test("-0.1 * -2 = 0.2", () =>
	assertStrictEquals(
		preciseMultiplyNegative(precise(-1n, -1n)),
		precise(2n, -1n),
	),
);

Deno.test("1 * 0.2 = 0.2", () =>
	assertStrictEquals(preciseMultiplyFloat(PRECISE_ONE), precise(2n, -1n)),
);

Deno.test("-1 * 0.2 = -0.2", () =>
	assertStrictEquals(
		preciseMultiplyFloat(precise(-1n, 0n)),
		precise(-2n, -1n),
	),
);

Deno.test("0.1 * 0.2 = 0.02", () =>
	assertStrictEquals(
		preciseMultiplyFloat(precise(1n, -1n)),
		precise(2n, -2n),
	),
);

Deno.test("-0.1 * 0.2 = -0.02", () =>
	assertStrictEquals(
		preciseMultiplyFloat(precise(-1n, -1n)),
		precise(-2n, -2n),
	),
);

Deno.test("1 * -0.2 = -0.2", () =>
	assertStrictEquals(
		preciseMultiplyNegativeFloat(PRECISE_ONE),
		precise(-2n, -1n),
	),
);

Deno.test("-1 * -0.2 = 0.2", () =>
	assertStrictEquals(
		preciseMultiplyNegativeFloat(precise(-1n, 0n)),
		precise(2n, -1n),
	),
);

Deno.test("0.1 * -0.2 = -0.02", () =>
	assertStrictEquals(
		preciseMultiplyNegativeFloat(precise(1n, -1n)),
		precise(-2n, -2n),
	),
);

Deno.test("-0.1 * -0.2 = 0.02", () =>
	assertStrictEquals(
		preciseMultiplyNegativeFloat(precise(-1n, -1n)),
		precise(2n, -2n),
	),
);

Deno.test("5 * 0.00001 = 0.00005", () =>
	assertStrictEquals(
		preciseMultiply(precise(1n, -5n))(precise(5n, 0n)),
		precise(5n, -5n),
	),
);

Deno.test("0.00001 * 5 = 0.00005", () =>
	assertStrictEquals(
		preciseMultiply(precise(5n, 0n))(precise(1n, -5n)),
		precise(5n, -5n),
	),
);
