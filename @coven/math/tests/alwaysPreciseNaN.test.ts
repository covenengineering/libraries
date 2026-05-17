import { assertStrictEquals } from "@std/assert";
import { alwaysPreciseNaN } from "../alwaysPreciseNaN.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";

Deno.test("alwaysPreciseNaN returns PRECISE_NAN", () =>
	assertStrictEquals(alwaysPreciseNaN(), PRECISE_NAN),
);
