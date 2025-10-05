import { fnv1aReducer, FNV_OFFSET_32 } from "@coven/utils";
import { assertEquals } from "@std/assert";

Deno.test(
	'1 cryptoNumber call with a "test" seed returns the same result',
	() => assertEquals(fnv1aReducer(FNV_OFFSET_32, 13), 135029208),
);

Deno.test(
	'2 cryptoNumber call with a "test" seed returns the same for both',
	() =>
		assertEquals(
			[fnv1aReducer(FNV_OFFSET_32, 13), fnv1aReducer(FNV_OFFSET_32, 13)],
			[135029208, 135029208],
		),
);
