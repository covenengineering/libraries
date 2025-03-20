import { isRangeString } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("String that is a * returns false", () =>
	assertFalse(isRangeString("*")),
);

Deno.test("Array of numbers returns true", () =>
	assertFalse(isRangeString("1,2,3")),
);

Deno.test("Range returns true", () => assert(isRangeString("3-5")));

Deno.test("Range with inverted from and to returns false", () =>
	assertFalse(isRangeString("5-3")),
);
