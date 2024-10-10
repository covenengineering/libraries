import { preciseAdd } from "@coven/math";
import { assertEquals } from "@std/assert";

const preciseAddPositive = preciseAdd(2n);
const preciseAddNegative = preciseAdd(-2n);
const preciseAddFloat = preciseAdd(2n, -1n);
const preciseAddNegativeFloat = preciseAdd(-2n, -1n);

Deno.test("1 + 2 = 3", () => assertEquals(preciseAddPositive(1n), [3n]));

Deno.test("-1 + 2 = 1", () => assertEquals(preciseAddPositive(-1n), [1n]));

Deno.test("0.1 + 2 = 2.1", () =>
	assertEquals(preciseAddPositive(1n, -1n), [21n, -1n]),
);

Deno.test("-0.1 + 2 = 1.9", () =>
	assertEquals(preciseAddPositive(-1n, -1n), [19n, -1n]),
);

Deno.test("1 + -2 = -1", () => assertEquals(preciseAddNegative(1n), [-1n]));

Deno.test("-1 + -2 = -3", () => assertEquals(preciseAddNegative(-1n), [-3n]));

Deno.test("0.1 + -2 = -1.9", () =>
	assertEquals(preciseAddNegative(1n, -1n), [-19n, -1n]),
);

Deno.test("-0.1 + -2 = -2.1", () =>
	assertEquals(preciseAddNegative(-1n, -1n), [-21n, -1n]),
);

Deno.test("1 + 0.2 = 1.2", () => assertEquals(preciseAddFloat(1n), [12n, -1n]));

Deno.test("-1 + 0.2 = -0.8", () =>
	assertEquals(preciseAddFloat(-1n), [-8n, -1n]),
);

Deno.test("0.1 + 0.2 = 0.3", () =>
	assertEquals(preciseAddFloat(1n, -1n), [3n, -1n]),
);

Deno.test("-0.1 + 0.2 = 0.1", () =>
	assertEquals(preciseAddFloat(-1n, -1n), [1n, -1n]),
);

Deno.test("1 + -0.2 = 0.8", () =>
	assertEquals(preciseAddNegativeFloat(1n), [8n, -1n]),
);

Deno.test("-1 + -0.2 = -1.2", () =>
	assertEquals(preciseAddNegativeFloat(-1n), [-12n, -1n]),
);

Deno.test("0.1 + -0.2 = -0.1", () =>
	assertEquals(preciseAddNegativeFloat(1n, -1n), [-1n, -1n]),
);

Deno.test("-0.1 + -0.2 = -0.3", () =>
	assertEquals(preciseAddNegativeFloat(-1n, -1n), [-3n, -1n]),
);

Deno.test("5 + 0.00001 = 5.00001", () =>
	assertEquals(preciseAdd(1n, -5n)(5n), [500_001n, -5n]),
);

Deno.test("0.00001 + 5 = 5.00001", () =>
	assertEquals(preciseAdd(5n)(1n, -5n), [500_001n, -5n]),
);
