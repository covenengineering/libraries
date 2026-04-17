import { assertStrictEquals } from "@std/assert";
import { preciseToNumber } from "../preciseToNumber.ts";

Deno.test("precise(13n) = 13", () =>
	assertStrictEquals(preciseToNumber(13n, 0n), 13),
);

Deno.test("precise(13n, 2n) = 1300", () =>
	assertStrictEquals(preciseToNumber(13n, 2n), 1300),
);

Deno.test("precise(-13n) = -13", () =>
	assertStrictEquals(preciseToNumber(-13n, 0n), -13),
);

Deno.test("precise(-13n, 2n) = -1300", () =>
	assertStrictEquals(preciseToNumber(-13n, 2n), -1300),
);

Deno.test("precise(131n, -1n) = 13.1", () =>
	assertStrictEquals(preciseToNumber(131n, -1n), 13.1),
);

Deno.test("precise(13_001n, -1n) = 1300.1", () =>
	assertStrictEquals(preciseToNumber(13_001n, -1n), 1300.1),
);

Deno.test("precise(-131n, -1n) = -13.1", () =>
	assertStrictEquals(preciseToNumber(-131n, -1n), -13.1),
);

Deno.test("precise(-13_001n, -1n) = -1300.1", () =>
	assertStrictEquals(preciseToNumber(-13_001n, -1n), -1300.1),
);

Deno.test("precise(-13_000n, 0n) = -13_000", () =>
	assertStrictEquals(preciseToNumber(-13_000n, 0n), -13_000),
);
