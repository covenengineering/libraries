import { assertStrictEquals } from "@std/assert";
import { calculate } from "../calculate.ts";
import { numericToPrecise } from "../numericToPrecise.ts";

Deno.test("0.1 + 0.2 = 0.3", () =>
	assertStrictEquals(+calculate(0.1).plus(0.2), 0.3),
);

Deno.test("0.6 / 2 = 0.3", () =>
	assertStrictEquals(+calculate(0.6).over(2), 0.3),
);

Deno.test("0.1 * 3 = 0.3", () =>
	assertStrictEquals(+calculate(0.1).times(3), 0.3),
);

Deno.test("0.5 - 0.2 = 0.3", () =>
	assertStrictEquals(+calculate(0.5).minus(0.2), 0.3),
);

Deno.test("1 + 0.1 - 1 = 0.1", () =>
	assertStrictEquals(+calculate(1).plus(0.1).minus(1), 0.1),
);

Deno.test("1e16 + 0.1 - 1e16 = 0.1", () =>
	assertStrictEquals(+calculate(1e16).plus(0.1).minus(1e16), 0.1),
);

Deno.test("((0.7 + 0.3) / 4 * 2) - 0.2 = 0.3", () =>
	assertStrictEquals(
		+calculate(0.7).plus(0.3).over(4).times(2).minus(0.2),
		0.3,
	),
);

Deno.test("((2 + 2) / 2 * 2) - 2 = 2", () =>
	assertStrictEquals(+calculate(2).plus(2).over(2).times(2).minus(2), 2),
);

Deno.test("Infinity + 2 = NaN", () =>
	assertStrictEquals(+calculate(Infinity).plus(2), NaN),
);

Deno.test("NaN + 2 = NaN", () =>
	assertStrictEquals(+calculate(NaN).plus(2), NaN),
);

Deno.test("Infinity + Infinity = NaN", () =>
	assertStrictEquals(+calculate(Infinity).plus(Infinity), NaN),
);

Deno.test("2 + Infinity = NaN", () =>
	assertStrictEquals(+calculate(2).plus(NaN), NaN),
);

Deno.test("NaN + Infinity = NaN", () =>
	assertStrictEquals(+calculate(NaN).plus(Infinity), NaN),
);

Deno.test("NaN + NaN = NaN", () =>
	assertStrictEquals(+calculate(NaN).plus(NaN), NaN),
);

Deno.test("2 + NaN = NaN", () =>
	assertStrictEquals(+calculate(2).plus(NaN), NaN),
);

Deno.test("Infinity + NaN = NaN", () =>
	assertStrictEquals(+calculate(Infinity).plus(NaN), NaN),
);

Deno.test("Infinity - 2 = NaN", () =>
	assertStrictEquals(+calculate(Infinity).minus(2), NaN),
);

Deno.test("NaN - 2 = NaN", () =>
	assertStrictEquals(+calculate(NaN).minus(2), NaN),
);

Deno.test("Infinity - Infinity = NaN", () =>
	assertStrictEquals(+calculate(Infinity).minus(Infinity), NaN),
);

Deno.test("2 - Infinity = NaN", () =>
	assertStrictEquals(+calculate(2).minus(Infinity), NaN),
);

Deno.test("NaN - Infinity = NaN", () =>
	assertStrictEquals(+calculate(NaN).minus(Infinity), NaN),
);

Deno.test("NaN - NaN = NaN", () =>
	assertStrictEquals(+calculate(NaN).minus(NaN), NaN),
);

Deno.test("2 - NaN = NaN", () =>
	assertStrictEquals(+calculate(2).minus(NaN), NaN),
);

Deno.test("Infinity - NaN = NaN", () =>
	assertStrictEquals(+calculate(Infinity).minus(NaN), NaN),
);

Deno.test("Infinity * 2 = NaN", () =>
	assertStrictEquals(+calculate(Infinity).times(2), NaN),
);

Deno.test("NaN * 2 = NaN", () =>
	assertStrictEquals(+calculate(NaN).times(2), NaN),
);

Deno.test("Infinity * Infinity = NaN", () =>
	assertStrictEquals(+calculate(Infinity).times(Infinity), NaN),
);

Deno.test("2 * Infinity = NaN", () =>
	assertStrictEquals(+calculate(2).times(Infinity), NaN),
);

Deno.test("NaN * Infinity = NaN", () =>
	assertStrictEquals(+calculate(NaN).times(Infinity), NaN),
);

Deno.test("NaN * NaN = NaN", () =>
	assertStrictEquals(+calculate(NaN).times(NaN), NaN),
);

Deno.test("2 * NaN = NaN", () =>
	assertStrictEquals(+calculate(2).times(NaN), NaN),
);

Deno.test("Infinity * NaN = NaN", () =>
	assertStrictEquals(+calculate(Infinity).times(NaN), NaN),
);

Deno.test("Infinity / 2 = NaN", () =>
	assertStrictEquals(+calculate(Infinity).over(2), NaN),
);

Deno.test("NaN / 2 = NaN", () =>
	assertStrictEquals(+calculate(NaN).over(2), NaN),
);

Deno.test("Infinity / Infinity = NaN", () =>
	assertStrictEquals(+calculate(Infinity).over(Infinity), NaN),
);

Deno.test("2 / Infinity = NaN", () =>
	assertStrictEquals(+calculate(2).over(Infinity), NaN),
);

Deno.test("NaN / Infinity = NaN", () =>
	assertStrictEquals(+calculate(NaN).over(Infinity), NaN),
);

Deno.test("NaN / NaN = NaN", () =>
	assertStrictEquals(+calculate(NaN).over(NaN), NaN),
);

Deno.test("2 / NaN = NaN", () =>
	assertStrictEquals(+calculate(2).over(NaN), NaN),
);

Deno.test("Infinity / NaN = NaN", () =>
	assertStrictEquals(+calculate(Infinity).over(NaN), NaN),
);

Deno.test("1 / 3 * 3 = 1", () =>
	assertStrictEquals(+calculate(1).over(3).times(3), 1),
);

Deno.test(
	"Getting raw of calculate returns the same as creating a precise from a number",
	() => assertStrictEquals(calculate(13).raw, numericToPrecise(13)),
);

Deno.test("Getting string of calculation returns expected value", () =>
	assertStrictEquals(`${calculate(13)}`, "13"),
);
