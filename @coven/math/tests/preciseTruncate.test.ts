import { assertStrictEquals } from "@std/assert";
import { precise } from "../precise.ts";
import { PRECISE_NAN } from "../PRECISE_NAN.ts";
import { preciseTruncate } from "../preciseTruncate.ts";

Deno.test("Truncation of 1.1 is 1", () =>
	assertStrictEquals(preciseTruncate(precise(11n, -1n)), precise(1n, 0n)),
);

Deno.test("Truncation of 1.5 is 1", () =>
	assertStrictEquals(preciseTruncate(precise(15n, -1n)), precise(1n, 0n)),
);

Deno.test("Truncation of 1.9 is 1", () =>
	assertStrictEquals(preciseTruncate(precise(19n, -1n)), precise(1n, 0n)),
);

Deno.test("Truncation of 13 is 13", () =>
	assertStrictEquals(preciseTruncate(precise(13n, 0n)), precise(13n, 0n)),
);

Deno.test("Truncation of NaN is NaN", () =>
	assertStrictEquals(preciseTruncate(PRECISE_NAN), PRECISE_NAN),
);
