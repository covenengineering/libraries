import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { preciseRound } from "../preciseRound.ts";

Deno.test("Rounding of 1.1 is 1", () =>
	assertStrictEquals(preciseRound(precise(11n, -1n)), precise(1n, 0n)),
);

Deno.test("Rounding of 1.5 is 2", () =>
	assertStrictEquals(preciseRound(precise(15n, -1n)), precise(2n, 0n)),
);

Deno.test("Rounding of 1.9 is 2", () =>
	assertStrictEquals(preciseRound(precise(19n, -1n)), precise(2n, 0n)),
);

Deno.test("Rounding of 13 is 13", () =>
	assertStrictEquals(preciseRound(precise(13n, 0n)), precise(13n, 0n)),
);

Deno.test("Rounding of -1.1 is -1", () =>
	assertStrictEquals(preciseRound(precise(-11n, -1n)), precise(-1n, 0n)),
);

Deno.test("Rounding of -1.5 is -2", () =>
	assertStrictEquals(preciseRound(precise(-15n, -1n)), precise(-2n, 0n)),
);

Deno.test("Rounding of -1.9 is -2", () =>
	assertStrictEquals(preciseRound(precise(-19n, -1n)), precise(-2n, 0n)),
);

Deno.test("Rounding of -13 is -13", () =>
	assertStrictEquals(preciseRound(precise(-13n, 0n)), precise(-13n, 0n)),
);

Deno.test("Rounding of NaN is NaN", () =>
	assertStrictEquals(preciseRound(PRECISE_NAN), PRECISE_NAN),
);
