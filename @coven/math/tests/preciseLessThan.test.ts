import { assert, assertFalse } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseLessThan } from "../preciseLessThan.ts";

const lessThan13 = preciseLessThan(precise(13n, 0n));

Deno.test("13 compared with 42 returns false", () =>
	assertFalse(lessThan13(precise(42n, 0n))),
);

Deno.test("13 compared with 1.3 returns true", () =>
	assert(lessThan13(precise(13n, -1n))),
);

Deno.test("13 compared with 13 returns false", () =>
	assertFalse(lessThan13(precise(13n, 0n))),
);
