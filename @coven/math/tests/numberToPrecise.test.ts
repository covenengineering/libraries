import { assertEquals } from "@std/assert";
import { numberToPrecise } from "../numberToPrecise.ts";
import { precise } from "../precise.ts";

Deno.test("13 = precise(13n)", () =>
	assertEquals(numberToPrecise(13), precise(13n, 0n)),
);

Deno.test("1300 = precise(13n, 2n)", () =>
	assertEquals(numberToPrecise(1300), precise(13n, 2n)),
);

Deno.test("-13 = precise(-13n)", () =>
	assertEquals(numberToPrecise(-13), precise(-13n, 0n)),
);

Deno.test("-1300 = precise(-13n, 2n)", () =>
	assertEquals(numberToPrecise(-1300), precise(-13n, 2n)),
);

Deno.test("13.1 = precise(131n, -1n)", () =>
	assertEquals(numberToPrecise(13.1), precise(131n, -1n)),
);

Deno.test("1300.1 = precise(13_001n, -1n)", () =>
	assertEquals(numberToPrecise(1300.1), precise(13_001n, -1n)),
);

Deno.test("-13.1 = precise(-131n, -1n)", () =>
	assertEquals(numberToPrecise(-13.1), precise(-131n, -1n)),
);

Deno.test("-1300.1 = precise(-13_001n, -1n)", () =>
	assertEquals(numberToPrecise(-1300.1), precise(-13_001n, -1n)),
);

Deno.test("10000000000000000 = precise(1n, 16n)", () =>
	assertEquals(numberToPrecise(1e16), precise(1n, 16n)),
);

Deno.test("-10000000000000000 = precise(-1n, 16n)", () =>
	assertEquals(numberToPrecise(-1e16), precise(-1n, 16n)),
);
