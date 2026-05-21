import type { Stringable, Unary } from "@coven/types";
import { seededRandom } from "@coven/utils";
import { forever } from "./forever.ts";
import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Deterministic pseudo-random number generator.
 *
 * @example
 * ```typescript
 * import { iterableToArray, take } from "@coven/iterables";
 *
 * const randomValue = random("some seed");
 * const random0To10 = randomValue(0)(10);
 *
 * iterableToArray(take(2)(random0To10)); // Two "random" values between 0 and 10
 * iterableToArray(take(2)(random0To10)); // Same two "random" values between 0 and 10
 * ```
 * @see {@linkcode https://coven.to/utils/doc/~/seededRandom seededRandom}
 * @param seed Seed to be used to generate random numbers.
 * @returns Curried generator function with `seed` set in context.
 */
export const random =
	(
		seed: Stringable,
	): Unary<
		[from: number],
		Unary<[to: number], Readonly<IterableIterator<number>>>
	> =>
	(from) =>
	(to) =>
		iteratorFunctionToIterableIterator(() => {
			let state: Stringable = seed;
			const min = from < to ? from : to;
			const max = from > to ? from : to;

			return forever(() =>
				Math.min(
					Math.max(
						(state =
							seededRandom(`${state}(${min}-${max})`)
								* (max + 2 - min)
							+ (min - 1)),
						min,
					),
					max,
				),
			);
		});
