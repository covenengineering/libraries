import { assertStrictEquals } from "@std/assert";
import { calculate } from "../calculate.ts";

Deno.test("0.1 + 0.2 = 0.3", () =>
	assertStrictEquals(calculate(0.1).plus(0.2).total, 0.3),
);

Deno.test("0.6 / 2 = 0.3", () =>
	assertStrictEquals(calculate(0.6).dividedBy(2).total, 0.3),
);

Deno.test("0.1 * 3 = 0.3", () =>
	assertStrictEquals(calculate(0.1).times(3).total, 0.3),
);

Deno.test("0.5 - 0.2 = 0.3", () =>
	assertStrictEquals(calculate(0.5).minus(0.2).total, 0.3),
);

Deno.test("1 + 0.1 - 1 = 0.1", () =>
	assertStrictEquals(calculate(1).plus(0.1).minus(1).total, 0.1),
);

Deno.test("1e16 + 0.1 - 1e16 = 0.1", () =>
	assertStrictEquals(calculate(1e16).plus(0.1).minus(1e16).total, 0.1),
);

Deno.test("((0.7 + 0.3) / 4 * 2) - 0.2 = 0.3", () =>
	assertStrictEquals(
		calculate(0.7).plus(0.3).dividedBy(4).times(2).minus(0.2).total,
		0.3,
	),
);

Deno.test("((2 + 2) / 2 * 2) - 2 = 2", () =>
	assertStrictEquals(
		calculate(2).plus(2).dividedBy(2).times(2).minus(2).total,
		2,
	),
);

Deno.test("Infinity + 2 = Infinity", () =>
	assertStrictEquals(calculate(Infinity).plus(2).total, Infinity),
);

Deno.test("NaN + 2 = NaN", () =>
	assertStrictEquals(calculate(NaN).plus(2).total, NaN),
);

Deno.test("Infinity + Infinity = Infinity", () =>
	assertStrictEquals(calculate(Infinity).plus(Infinity).total, Infinity),
);

Deno.test("2 + Infinity = Infinity", () =>
	assertStrictEquals(calculate(2).plus(Infinity).total, Infinity),
);

Deno.test("NaN + Infinity = NaN", () =>
	assertStrictEquals(calculate(NaN).plus(Infinity).total, NaN),
);

Deno.test("NaN + NaN = NaN", () =>
	assertStrictEquals(calculate(NaN).plus(NaN).total, NaN),
);

Deno.test("2 + NaN = NaN", () =>
	assertStrictEquals(calculate(2).plus(NaN).total, NaN),
);

Deno.test("Infinity + NaN = NaN", () =>
	assertStrictEquals(calculate(Infinity).plus(NaN).total, NaN),
);

Deno.test("Infinity - 2 = Infinity", () =>
	assertStrictEquals(calculate(Infinity).minus(2).total, Infinity),
);

Deno.test("NaN - 2 = NaN", () =>
	assertStrictEquals(calculate(NaN).minus(2).total, NaN),
);

Deno.test("Infinity - Infinity = NaN", () =>
	assertStrictEquals(calculate(Infinity).minus(Infinity).total, NaN),
);

Deno.test("2 - Infinity = -Infinity", () =>
	assertStrictEquals(calculate(2).minus(Infinity).total, -Infinity),
);

Deno.test("NaN - Infinity = NaN", () =>
	assertStrictEquals(calculate(NaN).minus(Infinity).total, NaN),
);

Deno.test("NaN - NaN = NaN", () =>
	assertStrictEquals(calculate(NaN).minus(NaN).total, NaN),
);

Deno.test("2 - NaN = NaN", () =>
	assertStrictEquals(calculate(2).minus(NaN).total, NaN),
);

Deno.test("Infinity - NaN = NaN", () =>
	assertStrictEquals(calculate(Infinity).minus(NaN).total, NaN),
);

Deno.test("Infinity * 2 = Infinity", () =>
	assertStrictEquals(calculate(Infinity).times(2).total, Infinity),
);

Deno.test("NaN * 2 = NaN", () =>
	assertStrictEquals(calculate(NaN).times(2).total, NaN),
);

Deno.test("Infinity * Infinity = Infinity", () =>
	assertStrictEquals(calculate(Infinity).times(Infinity).total, Infinity),
);

Deno.test("2 * Infinity = Infinity", () =>
	assertStrictEquals(calculate(2).times(Infinity).total, Infinity),
);

Deno.test("NaN * Infinity = NaN", () =>
	assertStrictEquals(calculate(NaN).times(Infinity).total, NaN),
);

Deno.test("NaN * NaN = NaN", () =>
	assertStrictEquals(calculate(NaN).times(NaN).total, NaN),
);

Deno.test("2 * NaN = NaN", () =>
	assertStrictEquals(calculate(2).times(NaN).total, NaN),
);

Deno.test("Infinity * NaN = NaN", () =>
	assertStrictEquals(calculate(Infinity).times(NaN).total, NaN),
);

Deno.test("Infinity / 2 = Infinity", () =>
	assertStrictEquals(calculate(Infinity).dividedBy(2).total, Infinity),
);

Deno.test("NaN / 2 = NaN", () =>
	assertStrictEquals(calculate(NaN).dividedBy(2).total, NaN),
);

Deno.test("Infinity / Infinity = NaN", () =>
	assertStrictEquals(calculate(Infinity).dividedBy(Infinity).total, NaN),
);

Deno.test("2 / Infinity = 0", () =>
	assertStrictEquals(calculate(2).dividedBy(Infinity).total, 0),
);

Deno.test("NaN / Infinity = NaN", () =>
	assertStrictEquals(calculate(NaN).dividedBy(Infinity).total, NaN),
);

Deno.test("NaN / NaN = NaN", () =>
	assertStrictEquals(calculate(NaN).dividedBy(NaN).total, NaN),
);

Deno.test("2 / NaN = NaN", () =>
	assertStrictEquals(calculate(2).dividedBy(NaN).total, NaN),
);

Deno.test("Infinity / NaN = NaN", () =>
	assertStrictEquals(calculate(Infinity).dividedBy(NaN).total, NaN),
);
