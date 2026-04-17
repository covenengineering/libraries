import { assertStrictEquals } from "@std/assert";
import { numberToPrecise } from "../numberToPrecise.ts";
import { precise } from "../precise.ts";

Deno.test("13 = precise(13n)", () =>
	assertStrictEquals(numberToPrecise(13), precise(13n, 0n)),
);

Deno.test("1300 = precise(13n, 2n)", () =>
	assertStrictEquals(numberToPrecise(1300), precise(13n, 2n)),
);

Deno.test("-13 = precise(-13n)", () =>
	assertStrictEquals(numberToPrecise(-13), precise(-13n, 0n)),
);

Deno.test("-1300 = precise(-13n, 2n)", () =>
	assertStrictEquals(numberToPrecise(-1300), precise(-13n, 2n)),
);

Deno.test("13.1 = precise(131n, -1n)", () =>
	assertStrictEquals(numberToPrecise(13.1), precise(131n, -1n)),
);

Deno.test("1300.1 = precise(13_001n, -1n)", () =>
	assertStrictEquals(numberToPrecise(1300.1), precise(13_001n, -1n)),
);

Deno.test("-13.1 = precise(-131n, -1n)", () =>
	assertStrictEquals(numberToPrecise(-13.1), precise(-131n, -1n)),
);

Deno.test("-1300.1 = precise(-13_001n, -1n)", () =>
	assertStrictEquals(numberToPrecise(-1300.1), precise(-13_001n, -1n)),
);

Deno.test("10000000000000000 = precise(1n, 16n)", () =>
	assertStrictEquals(numberToPrecise(1e16), precise(1n, 16n)),
);

Deno.test("-10000000000000000 = precise(-1n, 16n)", () =>
	assertStrictEquals(numberToPrecise(-1e16), precise(-1n, 16n)),
);

Deno.test("Infinity = Infinity", () =>
	assertStrictEquals(numberToPrecise(Infinity), Infinity),
);

Deno.test("-Infinity = -Infinity", () =>
	assertStrictEquals(numberToPrecise(-Infinity), -Infinity),
);

Deno.test("NaN = NaN", () => assertStrictEquals(numberToPrecise(NaN), NaN));
