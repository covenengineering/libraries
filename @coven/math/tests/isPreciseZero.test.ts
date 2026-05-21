import { forEach, range } from "@coven/iterables";
import { assert } from "@std/assert";
import { EXPONENT_MAX } from "../EXPONENT_MAX.ts";
import { EXPONENT_MIN } from "../EXPONENT_MIN.ts";
import { isPreciseZero } from "../isPreciseZero.ts";
import { precise } from "../precise.ts";

Deno.test("All 255 possible values of zero are considered zero", () =>
	forEach((exponent: bigint) => assert(isPreciseZero(precise(0n, exponent))))(
		range(1n)(EXPONENT_MIN)(EXPONENT_MAX),
	),
);
