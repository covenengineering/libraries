import { attempt } from "@coven/parsers";
import { assertEquals } from "@std/assert";

const THROWS = true;
const DOES_NOT_THROW = false;

const throwingFunction = (shouldThrow: boolean) => {
	if (shouldThrow) {
		throw new Error("fail");
	} else {
		return "success";
	}
};

const safeFunction = attempt(throwingFunction);

Deno.test(
	"When a function that could throw doesn't throw, it returns the expected value",
	() => assertEquals(safeFunction(DOES_NOT_THROW), "success"),
);

Deno.test("When a function that could throw throws, it returns undefined", () =>
	assertEquals(safeFunction(THROWS), undefined));
