import { entriesToObject } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const stringKey = "key";
const numberKey = 1;
const symbolKey = Symbol("key");
const value = "value";

Deno.test(
	"Array of entries [string, value] returns an object with the shape { string: value }",
	() =>
		assertEquals(entriesToObject([[stringKey, value] as const]), {
			[stringKey]: value,
		}),
);

Deno.test(
	"Array of entries [number, value] returns an object with the shape { number: value }",
	() =>
		assertEquals(entriesToObject([[numberKey, value]]), {
			[numberKey]: value,
		}),
);

Deno.test(
	"Array of entries [symbol, value] returns an object with the shape { symbol: value }",
	() =>
		assertEquals(entriesToObject([[symbolKey, value]]), {
			[symbolKey]: value,
		}),
);

Deno.test(
	"Iterable of entries [string, value] returns an object with the shape { string: value }",
	() =>
		assertEquals(
			entriesToObject(Iterator.from([[stringKey, value] as const])),
			{ [stringKey]: value },
		),
);

Deno.test(
	"Iterable of entries [number, value] returns an object with the shape { number: value }",
	() =>
		assertEquals(
			entriesToObject(Iterator.from([[numberKey, value] as const])),
			{ [numberKey]: value },
		),
);

Deno.test(
	"Iterable of entries [symbol, value] returns an object with the shape { symbol: value }",
	() =>
		assertEquals(
			entriesToObject(Iterator.from([[symbolKey, value] as const])),
			{ [symbolKey]: value },
		),
);
