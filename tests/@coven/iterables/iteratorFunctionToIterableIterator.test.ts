import { iteratorFunctionToIterableIterator } from "@coven/iterables";
import { assertEquals } from "@std/assert/equals";

const numbers = [0, 1, 2, 3];
const iterableIteratorNumbers = iteratorFunctionToIterableIterator(() =>
	// deno-lint-ignore no-undef
	Iterator.from(numbers),
);

Deno.test(
	"Iterable iterator that we'll run twice returns the values twice",
	() =>
		assertEquals(
			[...iterableIteratorNumbers, ...iterableIteratorNumbers],
			[0, 1, 2, 3, 0, 1, 2, 3],
		),
);
