import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { preciseToString } from "../preciseToString.ts";

Deno.test('precise(13n, 0n) === "13"', () =>
	assertStrictEquals(preciseToString(precise(13n, 0n)), "13"),
);

Deno.test('precise(42n, 0n) === "42"', () =>
	assertStrictEquals(preciseToString(precise(42n, 0n)), "42"),
);

Deno.test('precise(-134269n, -2n) === "-1342.69"', () =>
	assertStrictEquals(preciseToString(precise(-134269n, -2n)), "-1342.69"),
);

Deno.test('precise(-13n, -3n) === "-0.013"', () =>
	assertStrictEquals(preciseToString(precise(-13n, -3n)), "-0.013"),
);

Deno.test('precise(0n, -255n) === "NaN"', () =>
	assertStrictEquals(preciseToString(PRECISE_NAN), "NaN"),
);
