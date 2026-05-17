import { assert, assertFalse } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseLessThanOrEqual } from "../preciseLessThanOrEqual.ts";

const lessThanOrEqualTo13 = preciseLessThanOrEqual(precise(13n, 0n));

Deno.test("13 compared with 42 returns false", () =>
	assertFalse(lessThanOrEqualTo13(precise(42n, 0n))),
);

Deno.test("13 compared with 1.3 returns true", () =>
	assert(lessThanOrEqualTo13(precise(13n, -1n))),
);

Deno.test("13 compared with 13 returns true", () =>
	assert(lessThanOrEqualTo13(precise(13n, 0n))),
);
