import { count } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const countEvens = count((number: number) => number % 2 === 0);
const countAll = count(_ => true);

Deno.test(
	"Array of mixed numbers and an even counter returns amount of even numbers in the array",
	async () => assertEquals(await countEvens([0, 1, 2, 3, 4]), 3),
);

Deno.test("Empty array and an even counter returns 0", async () =>
	assertEquals(await countEvens([]), 0),
);

Deno.test("Array of odd numbers and an even counter returns 0", async () =>
	assertEquals(await countEvens([1, 3, 5, 7]), 0),
);

Deno.test(
	"Array of mixed numbers and a counter with no filter returns full length",
	async () => assertEquals(await countAll([0, 1, 2, 3, 4]), 5),
);
