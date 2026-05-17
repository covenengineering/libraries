import { assert, assertFalse } from "@std/assert";
import { precise } from "../precise.ts";
import { preciseEqual } from "../preciseEqual.ts";

const isBadLuck = preciseEqual(precise(13n, 0n));

Deno.test("13 compared with 42 returns false", () =>
	assertFalse(isBadLuck(precise(42n, 0n))),
);

Deno.test("13 compared with 1.3 returns false", () =>
	assertFalse(isBadLuck(precise(13n, -1n))),
);

Deno.test("13 compared with 13 returns true", () =>
	assert(isBadLuck(precise(13n, 0n))),
);
