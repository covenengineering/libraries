import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { preciseFloor } from "../preciseFloor.ts";

Deno.test("Floor of 1.1 is 1", () =>
	assertStrictEquals(preciseFloor(precise(11n, -1n)), precise(1n, 0n)),
);

Deno.test("Floor of 1.5 is 1", () =>
	assertStrictEquals(preciseFloor(precise(15n, -1n)), precise(1n, 0n)),
);

Deno.test("Floor of 1.9 is 1", () =>
	assertStrictEquals(preciseFloor(precise(19n, -1n)), precise(1n, 0n)),
);

Deno.test("Floor of 13 is 13", () =>
	assertStrictEquals(preciseFloor(precise(13n, 0n)), precise(13n, 0n)),
);

Deno.test("Floor of -1.1 is -2", () =>
	assertStrictEquals(preciseFloor(precise(-11n, -1n)), precise(-2n, 0n)),
);

Deno.test("Floor of -1.5 is -2", () =>
	assertStrictEquals(preciseFloor(precise(-15n, -1n)), precise(-2n, 0n)),
);

Deno.test("Floor of -1.9 is -2", () =>
	assertStrictEquals(preciseFloor(precise(-19n, -1n)), precise(-2n, 0n)),
);

Deno.test("Floor of -13 is -13", () =>
	assertStrictEquals(preciseFloor(precise(-13n, 0n)), precise(-13n, 0n)),
);

Deno.test("Floor of NaN is NaN", () =>
	assertStrictEquals(preciseFloor(PRECISE_NAN), PRECISE_NAN),
);
