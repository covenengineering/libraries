import { assert, assertFalse } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseGreaterThanOrEqual } from "../preciseGreaterThanOrEqual.ts";

const greaterThanOrEqualTo13 = preciseGreaterThanOrEqual(precise(13n, 0n));

Deno.test("13 compared with 42 returns true", () =>
	assert(greaterThanOrEqualTo13(precise(42n, 0n))),
);

Deno.test("13 compared with 1.3 returns false", () =>
	assertFalse(greaterThanOrEqualTo13(precise(13n, -1n))),
);

Deno.test("13 compared with 13 returns true", () =>
	assert(greaterThanOrEqualTo13(precise(13n, 0n))),
);
