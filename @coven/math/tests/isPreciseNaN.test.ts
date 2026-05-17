import { assert } from "@std/assert";
import { isPreciseNaN } from "../isPreciseNaN.ts";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";

Deno.test("PRECISE_NAN is NaN", () => assert(isPreciseNaN(PRECISE_NAN)));

Deno.test("Any number with exponent beyond min is NaN", () =>
	assert(isPreciseNaN(precise(13n, -255n))),
);
