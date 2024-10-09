import {
	iterableToArray,
	iteratorFunctionToAsyncIterableIterator,
} from "@coven/iterables/async";
import { assertEquals } from "@std/assert/equals";

const numbers = [0, 1, 2, 3];
const iterableIteratorNumbers = iteratorFunctionToAsyncIterableIterator(
	function* (): Generator<number, void> {
		for (const number of numbers) {
			yield number;
		}
	},
);
const asyncIterableIteratorNumbers = iteratorFunctionToAsyncIterableIterator(
	async function* (): AsyncGenerator<number> {
		for await (const number of numbers) {
			yield await Promise.resolve(number);
		}
	},
);

Deno.test(
	"Iterable iterator that we'll run twice returns the values twice",
	async () =>
		assertEquals(
			[
				...(await iterableToArray(iterableIteratorNumbers)),
				...(await iterableToArray(iterableIteratorNumbers)),
			],
			[0, 1, 2, 3, 0, 1, 2, 3],
		),
);

Deno.test(
	"Async Iterable iterator that we'll run twice returns the values twice",
	async () =>
		assertEquals(
			[
				...(await iterableToArray(asyncIterableIteratorNumbers)),
				...(await iterableToArray(asyncIterableIteratorNumbers)),
			],
			[0, 1, 2, 3, 0, 1, 2, 3],
		),
);
