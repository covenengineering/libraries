import { assert, assertFalse } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseGreaterThan } from "../preciseGreaterThan.ts";

const greaterThan13 = preciseGreaterThan(precise(13n, 0n));

Deno.test("13 compared with 42 returns true", () =>
	assert(greaterThan13(precise(42n, 0n))),
);

Deno.test("13 compared with 1.3 returns false", () =>
	assertFalse(greaterThan13(precise(13n, -1n))),
);

Deno.test("13 compared with 13 returns false", () =>
	assertFalse(greaterThan13(precise(13n, 0n))),
);
