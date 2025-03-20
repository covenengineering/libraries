import { compareRangeOrValue } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("Two equal values returns true", () =>
	assert(compareRangeOrValue(13)(13)),
);

Deno.test("Two different values returns false", () =>
	assertFalse(compareRangeOrValue(13)(99)),
);

Deno.test("Value and a range that contains it returns true", () =>
	assert(compareRangeOrValue(13)({ from: 0, to: 99 })),
);

Deno.test("Value and a range that doesn't contain it returns false", () =>
	assertFalse(compareRangeOrValue(13)({ from: 0, to: 10 })),
);
