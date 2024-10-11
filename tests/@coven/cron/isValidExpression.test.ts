import { isValidExpression } from "@coven/cron";
import { assertStrictEquals } from "@std/assert";

Deno.test("a string that is a * return false", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isValidExpression("*"), false));

Deno.test("a valid expression return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isValidExpression("* * * * *"), true));

Deno.test("a valid expression with irregular spacing return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(isValidExpression("	* *  *   *    *	"), true));

Deno.test("a valid expression with all values set return true", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertStrictEquals(
		isValidExpression("1,2-5 1,2-5 1,2-5 1,2-5 1,2-5"),
		true,
	));
