import { entriesToObject } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const stringKey = "key";
const numberKey = 1;
const symbolKey = Symbol("key");
const value = "value";

Deno.test(
	"an array of entries [string, value] returns an object with the shape { string: value }",
	() =>
		assertEquals(entriesToObject([[stringKey, value] as const]), {
			[stringKey]: value,
		}),
);

Deno.test(
	"an array of entries [number, value] returns an object with the shape { number: value }",
	() =>
		assertEquals(entriesToObject([[numberKey, value]]), {
			[numberKey]: value,
		}),
);

Deno.test(
	"an array of entries [symbol, value] returns an object with the shape { symbol: value }",
	() =>
		assertEquals(entriesToObject([[symbolKey, value]]), {
			[symbolKey]: value,
		}),
);

Deno.test(
	"an iterable of entries [string, value] returns an object with the shape { string: value }",
	() =>
		assertEquals(
			entriesToObject(Iterator.from([[stringKey, value] as const])),
			{ [stringKey]: value },
		),
);

Deno.test(
	"an iterable of entries [number, value] returns an object with the shape { number: value }",
	() =>
		assertEquals(
			entriesToObject(Iterator.from([[numberKey, value] as const])),
			{ [numberKey]: value },
		),
);

Deno.test(
	"an iterable of entries [symbol, value] returns an object with the shape { symbol: value }",
	() =>
		assertEquals(
			entriesToObject(Iterator.from([[symbolKey, value] as const])),
			{ [symbolKey]: value },
		),
);
