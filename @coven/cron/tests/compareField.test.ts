import { assert, assertFalse } from "@std/assert";
import { compareField } from "../compareField.ts";

Deno.test("Two equal values returns true", () => assert(compareField(13)(13)));

Deno.test("Two different values returns false", () =>
	assertFalse(compareField(99)(13)),
);

Deno.test("Value and a range that contains it returns true", () =>
	assert(compareField({ from: 0, to: 99 })(13)),
);

Deno.test("Value and a range that doesn't contain it returns true", () =>
	assertFalse(compareField({ from: 0, to: 10 })(13)),
);

Deno.test("Value and a list that contains it returns true", () =>
	assert(compareField([10, 13])(13)),
);

Deno.test("Value and a list that doesn't contain it returns true", () =>
	assertFalse(compareField([10, 12])(13)),
);

Deno.test("Value and a list with a range that contains it returns true", () =>
	assert(compareField([10, { from: 11, to: 99 }])(13)),
);

Deno.test(
	"Value and a list with a range that doesn't contain it returns true",
	() => assertFalse(compareField([5, { from: 10, to: 12 }])(13)),
);
