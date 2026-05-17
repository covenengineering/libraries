import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_ONE } from "../PRECISE_ONE.ts";
import { preciseAdd } from "../preciseAdd.ts";

const preciseAddPositive = preciseAdd(precise(2n, 0n));
const preciseAddNegative = preciseAdd(precise(-2n, 0n));
const preciseAddFloat = preciseAdd(precise(2n, -1n));
const preciseAddNegativeFloat = preciseAdd(precise(-2n, -1n));

Deno.test("1 + 2 = 3", () =>
	assertStrictEquals(preciseAddPositive(PRECISE_ONE), precise(3n, 0n)),
);

Deno.test("-1 + 2 = 1", () =>
	assertStrictEquals(preciseAddPositive(precise(-1n, 0n)), PRECISE_ONE),
);

Deno.test("0.1 + 2 = 2.1", () =>
	assertStrictEquals(preciseAddPositive(precise(1n, -1n)), precise(21n, -1n)),
);

Deno.test("-0.1 + 2 = 1.9", () =>
	assertStrictEquals(
		preciseAddPositive(precise(-1n, -1n)),
		precise(19n, -1n),
	),
);

Deno.test("1 + -2 = -1", () =>
	assertStrictEquals(preciseAddNegative(PRECISE_ONE), precise(-1n, 0n)),
);

Deno.test("-1 + -2 = -3", () =>
	assertStrictEquals(preciseAddNegative(precise(-1n, 0n)), precise(-3n, 0n)),
);

Deno.test("0.1 + -2 = -1.9", () =>
	assertStrictEquals(
		preciseAddNegative(precise(1n, -1n)),
		precise(-19n, -1n),
	),
);

Deno.test("-0.1 + -2 = -2.1", () =>
	assertStrictEquals(
		preciseAddNegative(precise(-1n, -1n)),
		precise(-21n, -1n),
	),
);

Deno.test("1 + 0.2 = 1.2", () =>
	assertStrictEquals(preciseAddFloat(PRECISE_ONE), precise(12n, -1n)),
);

Deno.test("-1 + 0.2 = -0.8", () =>
	assertStrictEquals(preciseAddFloat(precise(-1n, 0n)), precise(-8n, -1n)),
);

Deno.test("0.1 + 0.2 = 0.3", () =>
	assertStrictEquals(preciseAddFloat(precise(1n, -1n)), precise(3n, -1n)),
);

Deno.test("-0.1 + 0.2 = 0.1", () =>
	assertStrictEquals(preciseAddFloat(precise(-1n, -1n)), precise(1n, -1n)),
);

Deno.test("1 + -0.2 = 0.8", () =>
	assertStrictEquals(preciseAddNegativeFloat(PRECISE_ONE), precise(8n, -1n)),
);

Deno.test("-1 + -0.2 = -1.2", () =>
	assertStrictEquals(
		preciseAddNegativeFloat(precise(-1n, 0n)),
		precise(-12n, -1n),
	),
);

Deno.test("0.1 + -0.2 = -0.1", () =>
	assertStrictEquals(
		preciseAddNegativeFloat(precise(1n, -1n)),
		precise(-1n, -1n),
	),
);

Deno.test("-0.1 + -0.2 = -0.3", () =>
	assertStrictEquals(
		preciseAddNegativeFloat(precise(-1n, -1n)),
		precise(-3n, -1n),
	),
);

Deno.test("5 + 0.00001 = 5.00001", () =>
	assertStrictEquals(
		preciseAdd(precise(1n, -5n))(precise(5n, 0n)),
		precise(500_001n, -5n),
	),
);

Deno.test("0.00001 + 5 = 5.00001", () =>
	assertStrictEquals(
		preciseAdd(precise(5n, 0n))(precise(1n, -5n)),
		precise(500_001n, -5n),
	),
);

Deno.test("1e16 + 0.1 = 100000000000000001e-1", () =>
	assertStrictEquals(
		preciseAdd(precise(1n, 16n))(precise(1n, -1n)),
		precise(100000000000000001n, -1n),
	),
);
