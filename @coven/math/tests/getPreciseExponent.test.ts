import { forEach, range } from "@coven/iterables";
import { assertStrictEquals } from "@std/assert";
import { EXPONENT_MAX } from "../EXPONENT_MAX.ts";
import { EXPONENT_MIN } from "../EXPONENT_MIN.ts";
import { getPreciseExponent } from "../getPreciseExponent.ts";
import { precise } from "../precise.ts";

Deno.test("Can get all exponents from a Precise", () =>
	forEach((exponent: bigint) =>
		assertStrictEquals(getPreciseExponent(precise(1n, exponent)), exponent),
	)(range(1n)(EXPONENT_MIN)(EXPONENT_MAX)),
);
