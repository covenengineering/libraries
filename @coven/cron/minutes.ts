import {
	iteratorFunctionToIterableIterator,
	map,
	repeat,
} from "@coven/iterables";

const minute = Temporal.Duration.from("PT1M");
const repeatInfinitely = repeat(Infinity)(undefined);

/**
 * Given a `Temporal.PlainDateTime` value, return an iterable iterator that
 * returns every minute after that value.
 *
 * @example
 * ```typescript
 * minutes(Temporal.PlainDateTime.from("1989-10-13T10:00:00.000")); // ["1989-10-13T10:01:00.000", "1989-10-13T10:02:00.000", ...]
 * ```
 * @param plainDateTime Value to start the iterator iterable from (starts in the
 * next minute).
 * @returns Iterator iterable of `Temporal.PlainDateTime`.
 */
export const minutes = (
	plainDateTime: Temporal.PlainDateTime,
): IterableIterator<Temporal.PlainDateTime> =>
	iteratorFunctionToIterableIterator(
		function* (): Generator<Temporal.PlainDateTime> {
			let currentDateTime = plainDateTime;

			yield* map(() => (currentDateTime = currentDateTime.add(minute)))(
				repeatInfinitely,
			);
		},
	);
