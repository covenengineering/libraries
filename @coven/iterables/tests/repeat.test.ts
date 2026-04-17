import { assertEquals } from "@std/assert";
import { iterableToArray } from "../iterableToArray.ts";
import { repeat } from "../repeat.ts";

const repeat3Times = repeat(3);
const repeat3nTimes = repeat(3n);

Deno.test(
	'a call to repeat with the string "test" and the number 3 returns an array with 3 strings "test" on it',
	() =>
		assertEquals(iterableToArray(repeat3Times("test")), [
			"test",
			"test",
			"test",
		]),
);

Deno.test(
	'a call to repeat with the string "test" and the bigint 3n returns an array with 3 strings "test" on it',
	() =>
		assertEquals(iterableToArray(repeat3nTimes("test")), [
			"test",
			"test",
			"test",
		]),
);
