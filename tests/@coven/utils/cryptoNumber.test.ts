import { cryptoNumber } from "@coven/utils";
import { assertEquals } from "@std/assert";

Deno.test('1 cryptoNumber call with a "test" seed returns the same result', () =>
	cryptoNumber("test").then((result) =>
		assertEquals(result, 0.507_088_102_285_537_9)
	));

Deno.test('2 cryptoNumber call with a "test" seed returns the same for both', () =>
	Promise.all([cryptoNumber("test"), cryptoNumber("test")]).then((result) =>
		assertEquals(result, [
			0.507_088_102_285_537_9,
			0.507_088_102_285_537_9,
		])
	));
