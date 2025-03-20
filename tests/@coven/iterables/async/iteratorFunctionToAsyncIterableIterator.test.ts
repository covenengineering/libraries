import {
	iterableToArray,
	iteratorFunctionToAsyncIterableIterator,
} from "@coven/iterables/async";
import { assertEquals, assertRejects } from "@std/assert";

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
const iterableIteratorSimple = iteratorFunctionToAsyncIterableIterator(() => {
	let done = false;

	return {
		next: () => ({ done: done || ((done = true), false), value: 13 }),
	};
});
const asyncIterableIteratorSimple = iteratorFunctionToAsyncIterableIterator(
	() => {
		let done = false;

		return {
			next: () =>
				Promise.resolve({
					done: done || ((done = true), false),
					value: 13,
				}),
		};
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
	"Iterable iterator throw exists and throws",
	() =>
		void assertRejects(
			async () => await iterableIteratorNumbers.throw?.("Test"),
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

Deno.test(
	"Iterator that only has next returns as many times as it's called",
	async () =>
		assertEquals(
			[
				...(await iterableToArray(iterableIteratorSimple)),
				...(await iterableToArray(iterableIteratorSimple)),
			],
			[13, 13],
		),
);

Deno.test(
	"AsyncIterator that only has next returns as many times as it's called",
	async () =>
		assertEquals(
			[
				...(await iterableToArray(asyncIterableIteratorSimple)),
				...(await iterableToArray(asyncIterableIteratorSimple)),
			],
			[13, 13],
		),
);
