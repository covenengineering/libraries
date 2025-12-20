import { iterableToArray, random, take } from "@coven/iterables";
import { assertEquals } from "@std/assert";

const seededRandom = random("test")(0)(10);
const seededRandomInverse = random("test")(10)(0);

Deno.test(
	'random with the seed "test" and a take(1) returns the expected value for it',
	() =>
		assertEquals(
			iterableToArray(take(1)(seededRandom)),
			[3.141_213_210_299_611],
		),
);

Deno.test(
	'random with the seed "test" and a take(2) returns the expected value for it',
	() =>
		assertEquals(
			iterableToArray(take(2)(seededRandom)),
			[3.141_213_210_299_611, 5.272_234_064_526_856],
		),
);

Deno.test(
	'random with the seed "test" and a take(10) returns the expected value for it',
	() =>
		assertEquals(
			iterableToArray(take(10)(seededRandom)),
			[
				3.141_213_210_299_611, 5.272_234_064_526_856,
				0.474_120_759_405_1957, 3.828_503_423_370_421, 0,
				6.255_908_024_497_33, 9.114_267_439_581_454,
				4.361_579_724_587_5, 9.915_763_438_679_278,
				6.130_150_911_398_232,
			],
		),
);

Deno.test(
	'random with the seed "test", and inverted from/to and a take(1) returns the expected value for it',
	() =>
		assertEquals(
			iterableToArray(take(1)(seededRandomInverse)),
			[3.141_213_210_299_611],
		),
);

Deno.test(
	'random with the seed "test", and inverted from/to and a take(2) returns the expected value for it',
	() =>
		assertEquals(
			iterableToArray(take(2)(seededRandomInverse)),
			[3.141_213_210_299_611, 5.272_234_064_526_856],
		),
);

Deno.test(
	'random with the seed "test", and inverted from/to and a take(10) returns the expected value for it',
	() =>
		assertEquals(
			iterableToArray(take(10)(seededRandomInverse)),
			[
				3.141_213_210_299_611, 5.272_234_064_526_856,
				0.474_120_759_405_1957, 3.828_503_423_370_421, 0,
				6.255_908_024_497_33, 9.114_267_439_581_454,
				4.361_579_724_587_5, 9.915_763_438_679_278,
				6.130_150_911_398_232,
			],
		),
);
