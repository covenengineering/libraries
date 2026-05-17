import { assertStrictEquals } from "@std/assert";
import { numericToPrecise } from "../numericToPrecise.ts";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";

Deno.test("13 = precise(13n, 0n)", () =>
	assertStrictEquals(numericToPrecise(13), precise(13n, 0n)),
);

Deno.test("1300 = precise(1300n, 0n)", () =>
	assertStrictEquals(numericToPrecise(1300), precise(1300n, 0n)),
);

Deno.test("-13 = precise(-13n, 0n)", () =>
	assertStrictEquals(numericToPrecise(-13), precise(-13n, 0n)),
);

Deno.test("-1300 = precise(-13n, 2n)", () =>
	assertStrictEquals(numericToPrecise(-1300), precise(-1300n, 0n)),
);

Deno.test("13.1 = precise(131n, -1n)", () =>
	assertStrictEquals(numericToPrecise(13.1), precise(131n, -1n)),
);

Deno.test("1300.1 = precise(13_001n, -1n)", () =>
	assertStrictEquals(numericToPrecise(1300.1), precise(13_001n, -1n)),
);

Deno.test("-13.1 = precise(-131n, -1n)", () =>
	assertStrictEquals(numericToPrecise(-13.1), precise(-131n, -1n)),
);

Deno.test("-1300.1 = precise(-13_001n, -1n)", () =>
	assertStrictEquals(numericToPrecise(-1300.1), precise(-13_001n, -1n)),
);

Deno.test("10000000000000000 = precise(1n, 16n)", () =>
	assertStrictEquals(
		numericToPrecise(1e16),
		precise(10_000_000_000_000_000n, 0n),
	),
);

Deno.test("-10000000000000000 = precise(-1n, 16n)", () =>
	assertStrictEquals(
		numericToPrecise(-1e16),
		precise(-10_000_000_000_000_000n, 0n),
	),
);

Deno.test("Infinity = nan", () =>
	assertStrictEquals(numericToPrecise(Infinity), PRECISE_NAN),
);

Deno.test("-Infinity = nan", () =>
	assertStrictEquals(numericToPrecise(-Infinity), PRECISE_NAN),
);

Deno.test("NaN = nan", () =>
	assertStrictEquals(numericToPrecise(NaN), PRECISE_NAN),
);

// .......

Deno.test("13n = precise(13n, 0n)", () =>
	assertStrictEquals(numericToPrecise(13n), precise(13n, 0n)),
);

Deno.test("1300n = precise(1300n, 0n)", () =>
	assertStrictEquals(numericToPrecise(1300n), precise(1300n, 0n)),
);

Deno.test("-13n = precise(-13n, 0n)", () =>
	assertStrictEquals(numericToPrecise(-13n), precise(-13n, 0n)),
);

Deno.test("-1300n = precise(-13n, 2n)", () =>
	assertStrictEquals(numericToPrecise(-1300n), precise(-1300n, 0n)),
);

Deno.test("10000000000000000n = precise(1n, 16n)", () =>
	assertStrictEquals(
		numericToPrecise(10000000000000000n),
		precise(10_000_000_000_000_000n, 0n),
	),
);

Deno.test("-10000000000000000n = precise(-1n, 16n)", () =>
	assertStrictEquals(
		numericToPrecise(-10000000000000000n),
		precise(-10_000_000_000_000_000n, 0n),
	),
);
