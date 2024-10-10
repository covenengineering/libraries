import { preciseDivide } from "@coven/math";
import { assertEquals } from "@std/assert";

const preciseDividePositive = preciseDivide(2n);
const preciseDivideNegative = preciseDivide(-2n);
const preciseDivideFloat = preciseDivide(2n, -1n);
const preciseDivideNegativeFloat = preciseDivide(-2n, -1n);

Deno.test("1 / 2 = 0.5", () =>
	assertEquals(preciseDividePositive(1n), [5n, -1n]),
);

Deno.test("-1 / 2 = -0.5", () =>
	assertEquals(preciseDividePositive(-1n), [-5n, -1n]),
);

Deno.test("0.1 / 2 = 0.05", () =>
	assertEquals(preciseDividePositive(1n, -1n), [5n, -2n]),
);

Deno.test("-0.1 / 2 = 0.05", () =>
	assertEquals(preciseDividePositive(-1n, -1n), [-5n, -2n]),
);

Deno.test("1 / -2 = -0.5", () =>
	assertEquals(preciseDivideNegative(1n, 1n), [-5n]),
);

Deno.test("-1 / -2 = 0.5", () =>
	assertEquals(preciseDivideNegative(-1n), [5n, -1n]),
);

Deno.test("0.1 / -2 = 0.05", () =>
	assertEquals(preciseDivideNegative(1n, -1n), [-5n, -2n]),
);

Deno.test("-0.1 / -2 = 0.05", () =>
	assertEquals(preciseDivideNegative(-1n, -1n), [5n, -2n]),
);

Deno.test("1 / 0.2 = 5", () => assertEquals(preciseDivideFloat(1n), [5n]));

Deno.test("-1 / 0.2 = -5", () => assertEquals(preciseDivideFloat(-1n), [-5n]));

Deno.test("0.1 / 0.2 = 0.5", () =>
	assertEquals(preciseDivideFloat(1n, -1n), [5n, -1n]),
);

Deno.test("-0.1 / 0.2 = -0.5", () =>
	assertEquals(preciseDivideFloat(-1n, -1n), [-5n, -1n]),
);

Deno.test("1 / -0.2 = -5", () =>
	assertEquals(preciseDivideNegativeFloat(1n), [-5n]),
);

Deno.test("-1 / -0.2 = 5", () =>
	assertEquals(preciseDivideNegativeFloat(-1n), [5n]),
);

Deno.test("0.1 / -0.2 = -0.5", () =>
	assertEquals(preciseDivideNegativeFloat(1n, -1n), [-5n, -1n]),
);

Deno.test("-0.1 / -0.2 = 0.5", () =>
	assertEquals(preciseDivideNegativeFloat(-1n, -1n), [5n, -1n]),
);

Deno.test("5 / 0.00001 = 500000", () =>
	assertEquals(preciseDivide(1n, -5n)(5n), [5n, 5n]),
);

Deno.test("0.00001 / 5 = 0.000002", () =>
	assertEquals(preciseDivide(5n)(1n, -5n), [2n, -6n]),
);

Deno.test("1 / 0 = Infinity", () =>
	assertEquals(preciseDivide(0n)(1n), [Infinity]),
);
