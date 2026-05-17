import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { PRECISE_NEGATIVE_ONE } from "../PRECISE_NEGATIVE_ONE.ts";
import { PRECISE_ONE } from "../PRECISE_ONE.ts";
import { PRECISE_ZERO } from "../PRECISE_ZERO.ts";
import { preciseCompare } from "../preciseCompare.ts";

const compareWith2 = preciseCompare(precise(2n, 0n));
const compareWithNegative2 = preciseCompare(precise(-2n, 0n));
const compareWithNan = preciseCompare(PRECISE_NAN);

Deno.test("Comparing 1 with 2 returns -1", () =>
	assertStrictEquals(compareWith2(precise(1n, 0n)), PRECISE_NEGATIVE_ONE),
);

Deno.test("Comparing 2 with 2 returns 0", () =>
	assertStrictEquals(compareWith2(precise(2n, 0n)), PRECISE_ZERO),
);

Deno.test("Comparing 3 with 2 returns 1", () =>
	assertStrictEquals(compareWith2(precise(3n, 0n)), PRECISE_ONE),
);

Deno.test("Comparing NaN with 2 returns NaN", () =>
	assertStrictEquals(compareWith2(PRECISE_NAN), PRECISE_NAN),
);

Deno.test("Comparing -1 with -2 returns 1", () =>
	assertStrictEquals(compareWithNegative2(precise(-1n, 0n)), PRECISE_ONE),
);

Deno.test("Comparing -2 with -2 returns 0", () =>
	assertStrictEquals(compareWithNegative2(precise(-2n, 0n)), PRECISE_ZERO),
);

Deno.test("Comparing -3 with -2 returns 1", () =>
	assertStrictEquals(
		compareWithNegative2(precise(-3n, 0n)),
		PRECISE_NEGATIVE_ONE,
	),
);

Deno.test("Comparing NaN with -2 returns NaN", () =>
	assertStrictEquals(compareWithNegative2(PRECISE_NAN), PRECISE_NAN),
);

Deno.test("Comparing 1 with NaN returns NaN", () =>
	assertStrictEquals(compareWithNan(precise(1n, 0n)), PRECISE_NAN),
);

Deno.test("Comparing 2 with NaN returns NaN", () =>
	assertStrictEquals(compareWithNan(precise(2n, 0n)), PRECISE_NAN),
);

Deno.test("Comparing 3 with NaN returns NaN", () =>
	assertStrictEquals(compareWithNan(precise(3n, 0n)), PRECISE_NAN),
);

Deno.test("Comparing NaN with NaN returns 0", () =>
	assertStrictEquals(compareWithNan(PRECISE_NAN), PRECISE_ZERO),
);

Deno.test("Comparing 0.1 with 0.01 returns 1", () =>
	assertStrictEquals(
		preciseCompare(precise(1n, -2n))(precise(1n, -1n)),
		PRECISE_ONE,
	),
);
