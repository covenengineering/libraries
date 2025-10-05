import { seededRandom } from "@coven/utils";
import { assertEquals } from "@std/assert";

Deno.test(
	'1 cryptoNumber call with a "test" seed returns the same result',
	() => assertEquals(seededRandom("test"), 0.069_744_775_770_232_08),
);

Deno.test(
	'2 cryptoNumber call with a "test" seed returns the same for both',
	() =>
		assertEquals(
			[seededRandom("test"), seededRandom("test")],
			[0.069_744_775_770_232_08, 0.069_744_775_770_232_08],
		),
);
