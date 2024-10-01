import { attempt } from "@coven/parsers";
import { assertEquals } from "@std/assert";

const throwingFunction = (shouldThrow: boolean) => {
	if (shouldThrow) {
		throw new Error("fail");
	} else {
		return "success";
	}
};

const safeFunction = attempt(throwingFunction);

Deno.test(
	"Function that could throw, not throwing returns expected value",
	() =>
		// deno-lint-ignore no-boolean-literal-for-arguments
		assertEquals(safeFunction(false), "success"),
);

Deno.test("Function that could throw, throwing returns undefined", () =>
	// deno-lint-ignore no-boolean-literal-for-arguments
	assertEquals(safeFunction(true), undefined),
);
