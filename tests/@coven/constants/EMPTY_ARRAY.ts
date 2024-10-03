import { EMPTY_ARRAY } from "@coven/constants";
import { assertThrows } from "@std/assert";

Deno.test(
	"Array#copyWithin should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).copyWithin(0, 0),
		),
);

Deno.test(
	"Array#fill should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).fill("💀"),
		),
);

Deno.test(
	"Array#pop should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).pop(),
		),
);

Deno.test(
	"Array#push should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).push("💀"),
		),
);

Deno.test(
	"Array#reverse should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).reverse(),
		),
);

Deno.test(
	"Array#shift should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).shift(),
		),
);

Deno.test(
	"Array#sort should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).sort(),
		),
);

Deno.test(
	"Array#splice should throw",
	() =>
		void assertThrows(() =>
			(EMPTY_ARRAY as unknown as Array<string>).splice(0),
		),
);

Deno.test(
	"Array#unshift should throw",
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
	"Using `defineProperty` should throw",
	() =>
		void assertThrows(() =>
			Object.defineProperty(EMPTY_ARRAY, "test", { value: "💀" }),
		),
);
