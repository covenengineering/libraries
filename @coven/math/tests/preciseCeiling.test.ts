import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { preciseCeiling } from "../preciseCeiling.ts";

Deno.test("Ceiling of 1.1 is 2", () =>
	assertStrictEquals(preciseCeiling(precise(11n, -1n)), precise(2n, 0n)),
);

Deno.test("Ceiling of 1.5 is 2", () =>
	assertStrictEquals(preciseCeiling(precise(15n, -1n)), precise(2n, 0n)),
);

Deno.test("Ceiling of 1.9 is 2", () =>
	assertStrictEquals(preciseCeiling(precise(19n, -1n)), precise(2n, 0n)),
);

Deno.test("Ceiling of 13 is 13", () =>
	assertStrictEquals(preciseCeiling(precise(13n, 0n)), precise(13n, 0n)),
);

Deno.test("Ceiling of -1.1 is -1", () =>
	assertStrictEquals(preciseCeiling(precise(-11n, -1n)), precise(-1n, 0n)),
);

Deno.test("Ceiling of -1.5 is -1", () =>
	assertStrictEquals(preciseCeiling(precise(-15n, -1n)), precise(-1n, 0n)),
);

Deno.test("Ceiling of -1.9 is -1", () =>
	assertStrictEquals(preciseCeiling(precise(-19n, -1n)), precise(-1n, 0n)),
);

Deno.test("Ceiling of -13 is -13", () =>
	assertStrictEquals(preciseCeiling(precise(-13n, 0n)), precise(-13n, 0n)),
);

Deno.test("Ceiling of NaN is NaN", () =>
	assertStrictEquals(preciseCeiling(PRECISE_NAN), PRECISE_NAN),
);
