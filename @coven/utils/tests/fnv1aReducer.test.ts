import { assertEquals, assertStrictEquals } from "@std/assert";
import { fnv1aReducer } from "../fnv1aReducer.ts";
import { FNV_OFFSET_32 } from "../FNV_OFFSET_32.ts";

Deno.test(
	'1 cryptoNumber call with a "test" seed returns the same result',
	() => assertStrictEquals(fnv1aReducer(FNV_OFFSET_32, 13), 135029208),
);

Deno.test(
	'2 cryptoNumber call with a "test" seed returns the same for both',
	() =>
		assertEquals(
			[fnv1aReducer(FNV_OFFSET_32, 13), fnv1aReducer(FNV_OFFSET_32, 13)],
			[135029208, 135029208],
		),
);
