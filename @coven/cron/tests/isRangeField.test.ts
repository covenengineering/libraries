import { isRangeField } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("String that is a * returns false", () =>
	assertFalse(isRangeField("*")),
);

Deno.test("Array of numbers returns true", () =>
	assertFalse(isRangeField([1, 2, 3])),
);

Deno.test("Range returns true", () => assert(isRangeField({ from: 3, to: 5 })));

Deno.test("Range with inverted from and to returns false", () =>
	assertFalse(isRangeField({ from: 5, to: 3 })),
);
