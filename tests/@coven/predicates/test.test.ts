import { test } from "@coven/predicates";
import { assert, assertFalse } from "@std/assert";

const testNumbersString = test(new RegExp(String.raw`\d+`, "u"));
const testNumbersRegExp = test(/\d+/u);
const testWithErrors = test({ source: "('", flags: "u" });

Deno.test(
	"Given a string with numbers and a test looking for numbers using the RegExp constructor",
	() => assert(testNumbersString("13")),
);

Deno.test(
	"Given a string without numbers and a test looking for numbers using the RegExp constructor",
	() => assertFalse(testNumbersString("✨")),
);

Deno.test("Given a string with numbers and a test looking for numbers", () =>
	assert(testNumbersRegExp("13")));

Deno.test("Given a string without numbers and a test looking for numbers", () =>
	assertFalse(testNumbersRegExp("✨")));

Deno.test("Given a string and a test with syntax errors", () =>
	assertFalse(testWithErrors("✨")));
