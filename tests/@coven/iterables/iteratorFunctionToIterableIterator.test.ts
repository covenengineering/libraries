import { iteratorFunctionToIterableIterator } from "@coven/iterables";
import { assertEquals } from "@std/assert/equals";

const numbers = [0, 1, 2, 3];
const iterableIteratorNumbers = iteratorFunctionToIterableIterator(() =>
	Iterator.from(numbers)
);
const iterableIteratorSimple = iteratorFunctionToIterableIterator(() => {
	let done = false;

	return {
		next: () => ({ done: done || ((done = true), false), value: 13 }),
	};
});

Deno.test(
	"Iterable iterator that we'll run twice returns the values twice",
	() =>
		assertEquals(
			[...iterableIteratorNumbers, ...iterableIteratorNumbers],
			[0, 1, 2, 3, 0, 1, 2, 3],
		),
);

Deno.test(
	"Iterator that only has next returns as many times as it's called",
	() =>
		assertEquals(
			[...iterableIteratorSimple, ...iterableIteratorSimple],
			[13, 13],
		),
);
