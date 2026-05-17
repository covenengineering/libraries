import { assertStrictEquals } from "@std/assert";
import { EXPONENT_MAX } from "../EXPONENT_MAX.ts";
import { EXPONENT_MIN } from "../EXPONENT_MIN.ts";
import { getPreciseExponent } from "../getPreciseExponent.ts";
import { precise } from "../precise.ts";

Deno.test("Can get all exponents from a Precise", () => {
	for (let exponent = EXPONENT_MIN; exponent < EXPONENT_MAX; exponent += 1n) {
		assertStrictEquals(getPreciseExponent(precise(1n, exponent)), exponent);
	}
});
