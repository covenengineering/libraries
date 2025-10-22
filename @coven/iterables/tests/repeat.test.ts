import { iterableToArray, repeat } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const repeat3Times = repeat(3);

Deno.test(
	'a call to repeat with the string "test" and the number 3 returns an array with 3 strings "test" on it',
	() =>
		assertEquals(iterableToArray(repeat3Times("test")), [
			"test",
			"test",
			"test",
		]),
);
