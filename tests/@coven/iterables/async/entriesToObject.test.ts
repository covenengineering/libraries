import { entriesToObject, toIterable } from "@coven/iterables/async";
import { assertEquals } from "@std/assert";

const stringKey = "key";
const numberKey = 1;
const symbolKey = Symbol("key");
const value = "value";

Deno.test(
	"Array of entries [string, value] returns an object with the shape { string: value }",
	async () =>
		assertEquals(await entriesToObject([[stringKey, value] as const]), {
			[stringKey]: value,
		}),
);

Deno.test(
	"Array of entries [number, value] returns an object with the shape { number: value }",
	async () =>
		assertEquals(await entriesToObject([[numberKey, value]]), {
			[numberKey]: value,
		}),
);

Deno.test(
	"Array of entries [symbol, value] returns an object with the shape { symbol: value }",
	async () =>
		assertEquals(await entriesToObject([[symbolKey, value]]), {
			[symbolKey]: value,
		}),
);

Deno.test(
	"Iterable of entries [string, value] returns an object with the shape { string: value }",
	async () =>
		assertEquals(
			await entriesToObject(toIterable([[stringKey, value] as const])),
			{ [stringKey]: value },
		),
);

Deno.test(
	"Iterable of entries [number, value] returns an object with the shape { number: value }",
	async () =>
		assertEquals(
			await entriesToObject(toIterable([[numberKey, value] as const])),
			{ [numberKey]: value },
		),
);

Deno.test(
	"Iterable of entries [symbol, value] returns an object with the shape { symbol: value }",
	async () =>
		assertEquals(
			await entriesToObject(toIterable([[symbolKey, value] as const])),
			{ [symbolKey]: value },
		),
);
