import { assertThrows } from "@std/assert";
import { EMPTY_ARRAY } from "../EMPTY_ARRAY.ts";

Deno.test(
	"`Array#pop` should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).pop(),
		),
);

Deno.test(
	"`Array#push` should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).push("💀"),
		),
);

Deno.test(
	"`Array#shift` should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).shift(),
		),
);

Deno.test(
	"`Array#splice` should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).splice(0),
		),
);

Deno.test(
	"`Array#unshift` should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).unshift(),
		),
);

Deno.test(
	"Trying direct mutations should throw",
	() =>
		void assertThrows(() => {
			(EMPTY_ARRAY as unknown as Array<string>).length = 13;
		}),
);

Deno.test(
	"Using `Object.defineProperty` should throw",
	() =>
		void assertThrows(() =>
			Object.defineProperty(EMPTY_ARRAY, "test", { value: "💀" }),
		),
);
