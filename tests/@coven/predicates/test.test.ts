import { test } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const testNumbersString = test(new RegExp(String.raw`\d+`, "u"));
const testNumbersRegExp = test(/\d+/u);
const testWithErrors = test({ source: "('", flags: "u" });

Deno.test("test based on string and a number", () =>
	assert(testNumbersString("123")));

Deno.test("test based on string and a string with no numbers", () =>
	assertFalse(testNumbersString("foo")));

Deno.test("test based on a regular expression and a number", () =>
	assert(testNumbersRegExp("123")));

Deno.test(
	"test based on a regular expression and a string with no numbers",
	() => assertFalse(testNumbersRegExp("foo")),
);

Deno.test("test with syntax errors", () => assertFalse(testWithErrors("foo")));
