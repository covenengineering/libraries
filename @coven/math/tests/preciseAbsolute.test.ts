import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { preciseAbsolute } from "../preciseAbsolute.ts";

Deno.test("Positive number just returns the same number", () =>
	assertStrictEquals(preciseAbsolute(precise(13n, 0n)), precise(13n, 0n)),
);

Deno.test("Negative number returns the negated number", () =>
	assertStrictEquals(preciseAbsolute(precise(-13n, 0n)), precise(13n, 0n)),
);

Deno.test("NaN returns Nan", () =>
	assertStrictEquals(preciseAbsolute(PRECISE_NAN), PRECISE_NAN),
);
