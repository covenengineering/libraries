import { createPrecise } from "@coven/math";
import { assertEquals } from "@std/assert";

Deno.test("Infinity returns Infinity", () =>
	assertEquals(createPrecise(Infinity), [Infinity]),
);

Deno.test("Number valid tuple returns said tuple", () =>
	assertEquals(createPrecise(1n, 5n), [1n, 5n]),
);

Deno.test("Number with 0 exponent returns only base", () =>
	assertEquals(createPrecise(1n, 0n), [1n]),
);

Deno.test("Number with no exponent returns only base", () =>
	assertEquals(createPrecise(1n), [1n]),
);
