import { assertEquals } from "@std/assert";
import { thunk } from "../thunk.ts";

const double = (value: number) => value * 2;
const thunkDouble = thunk(double);

Deno.test("Thunk for a double function returns delayed double function", () =>
	assertEquals(thunkDouble(21)(), 42),
);
