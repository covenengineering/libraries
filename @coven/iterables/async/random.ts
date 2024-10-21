import { cryptoNumber } from "@coven/utils";
import { iteratorFunctionToAsyncIterableIterator } from "./iteratorFunctionToAsyncIterableIterator.ts";

/**
 * Deterministic pseudo-random number generator.
 *
 * > [!IMPORTANT]
 * > This only works in secure contexts.
 *
 * @example
 * ```typescript
 * import { iterableToArray, take } from "@coven/iterables/async";
 *
 * const seededRandom = random("some seed");
 * const random0To10 = seededRandom(0)(10);
 *
 * iterableToArray(take(2)(random0To10)); // Two "random" values between 0 and 10
 * iterableToArray(take(2)(random0To10)); // Same two "random" values between 0 and 10
 * ```
 * @see [SubtleCrypto#digest](https://mdn.io/SubtleCrypto.digest)
 * @see [cryptoNumber](https://jsr.io/@coven/utils/doc/~/cryptoNumber)
 * @param seed Seed to be used to generate random numbers.
 * @returns Curried generator function with `seed` set in context.
 */
export const random = (
	seed: string,
): (
	from: number,
) => (to: number) => Readonly<AsyncIterableIterator<number>> =>
(from) =>
(to) =>
	iteratorFunctionToAsyncIterableIterator(
		async function* (): AsyncGenerator<number> {
			let state: string | number = seed;
			const min = from < to ? from : to;
			const max = from > to ? from : to;

			for (;;) {
				yield Math.min(
					Math.max(
						state =
							// deno-lint-ignore no-await-in-loop
							(await cryptoNumber(
									`${state}(${min}-${max})`,
								)) *
								(max + 2 - min) +
							(min - 1),
						min,
					),
					max,
				);
			}
		},
	);
