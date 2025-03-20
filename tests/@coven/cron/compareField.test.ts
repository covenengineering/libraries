import { compareField } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("Two equal values returns true", () => assert(compareField(13, 13)));

Deno.test("Two different values returns false", () =>
	assertFalse(compareField(13, 99)),
);

Deno.test("Value and a range that contains it returns true", () =>
	assert(compareField(13, { from: 0, to: 99 })),
);

Deno.test("Value and a range that doesn't contain it returns true", () =>
	assertFalse(compareField(13, { from: 0, to: 10 })),
);

Deno.test("Value and a list that contains it returns true", () =>
	assert(compareField(13, [10, 13])),
);

Deno.test("Value and a list that doesn't contain it returns true", () =>
	assertFalse(compareField(13, [10, 12])),
);

Deno.test("Value and a list with a range that contains it returns true", () =>
	assert(compareField(13, [10, { from: 11, to: 99 }])),
);

Deno.test(
	"Value and a list with a range that doesn't contain it returns true",
	() => assertFalse(compareField(13, [5, { from: 10, to: 12 }])),
);
