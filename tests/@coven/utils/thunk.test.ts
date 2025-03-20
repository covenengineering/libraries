import { thunk } from "@coven/utils";
import { assertEquals } from "@std/assert";

const double = (value: number) => value * 2;
const thunkDouble = thunk(double);

Deno.test("Thunk for a double function returns delayed double function", () =>
	assertEquals(thunkDouble(21)(), 42),
);
