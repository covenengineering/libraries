import { EMPTY_OBJECT } from "@coven/constants";
import { assertThrows } from "@std/assert";

Deno.test(
	"Trying direct mutations should throw",
	() =>
		void assertThrows(() => {
			(EMPTY_OBJECT as Record<PropertyKey, unknown>).test = "💀";
		}),
);

Deno.test(
	"Using `defineProperty` should throw",
	() =>
		void assertThrows(() =>
			Object.defineProperty(EMPTY_OBJECT, "test", { value: "💀" }),
		),
);
