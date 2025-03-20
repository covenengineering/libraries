import { isValidExpression } from "@coven/cron";
import { assert, assertFalse } from "@std/assert";

Deno.test("String that is a * returns false", () =>
	assertFalse(isValidExpression("*")),
);

Deno.test("Valid expression returns true", () =>
	assert(isValidExpression("* * * * *")),
);

Deno.test("Valid expression with irregular spacing returns true", () =>
	assert(isValidExpression("	* *  *   *    *	")),
);

Deno.test("Valid expression with all values set returns true", () =>
	assert(isValidExpression("1,2-5 1,2-5 1,2-5 1,2-5 1,2-5")),
);
