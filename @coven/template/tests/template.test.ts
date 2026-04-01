import { template } from "@coven/template";
import { assertStrictEquals } from "@std/assert";

const moneyTemplate = template({
	boolean: (payed) => (payed ? "it's payed" : "it's due"),
	number: (cost) =>
		cost.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		}),
});
const payed = false;

Deno.test("Formats string as expected", () =>
	assertStrictEquals(
		moneyTemplate`The amount is ${13_000} and ${payed}.`,
		"The amount is $13,000.00 and it's due.",
	),
);

Deno.test("If string is empty it still works", () =>
	assertStrictEquals(moneyTemplate``, ""),
);

Deno.test("If string doesn't have any expressions still works", () =>
	assertStrictEquals(moneyTemplate`This should work`, "This should work"),
);

Deno.test("Works with unsupported types", () =>
	assertStrictEquals(moneyTemplate`${"a string"}`, "a string"),
);
