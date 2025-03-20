import { isListField } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("String that is a * returns false", () =>
	assertFalse(isListField("*")),
);

Deno.test("Array of numbers returns true", () =>
	assert(isListField([1, 2, 3])),
);

Deno.test("Array of numbers and ranges returns true", () =>
	assert(isListField([1, 2, { from: 3, to: 5 }])),
);
