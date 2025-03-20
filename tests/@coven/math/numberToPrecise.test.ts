import { numberToPrecise } from "@coven/math";
import { assertEquals } from "@std/assert";

Deno.test(
	"Positive integer without zeroes on the right returns a that number in a single",
	() => assertEquals(numberToPrecise(13), [13n]),
);

Deno.test(
	"Positive integer with zeroes on the right returns a that number in a tuple with the zero count",
	() => assertEquals(numberToPrecise(1300), [13n, 2n]),
);

Deno.test(
	"Negative integer without zeroes on the right returns a that number in a single",
	() => assertEquals(numberToPrecise(-13), [-13n]),
);

Deno.test(
	"Negative integer with zeroes on the right returns a that number in a tuple with the zero count",
	() => assertEquals(numberToPrecise(-1300), [-13n, 2n]),
);

Deno.test("Positive float without zeroes on the right returns a tuple", () =>
	assertEquals(numberToPrecise(13.1), [131n, -1n]),
);

Deno.test("Positive float with zeroes on the right returns a tuple", () =>
	assertEquals(numberToPrecise(1300.1), [13_001n, -1n]),
);

Deno.test("Negative float without zeroes on the right returns tuple", () =>
	assertEquals(numberToPrecise(-13.1), [-131n, -1n]),
);

Deno.test("Negative float with zeroes on the right returns a tuple", () =>
	assertEquals(numberToPrecise(-1300.1), [-13_001n, -1n]),
);
