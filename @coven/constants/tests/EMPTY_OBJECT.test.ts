import { assertThrows } from "@std/assert";
import { EMPTY_OBJECT } from "../EMPTY_OBJECT.ts";

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
