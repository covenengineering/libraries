import { iteratorFunctionToIterableIterator } from "./iteratorFunctionToIterableIterator.ts";

/**
 * Range iterable generator (from `from` to `to`).
 *
 * @example
 * ```typescript
 * [...range(1)(0)(5)]; // [0, 1, 2, 3, 4, 5]
 * [...range(1)(5)(0)]; // [5, 4, 3, 2, 1, 0]
 * ```
 * @param step Step size.
 * @returns Curried function with `step` set in context.
 */
export const range =
	(
		step: number,
	): ((from: number) => (to: number) => IterableIterator<number>) =>
	from =>
	to =>
		iteratorFunctionToIterableIterator(function* (): Generator<number> {
			for (
				let current = from;
				from < to ? current <= to : current >= to;
				current += from < to ? step : -step
			) {
				yield current;
			}
		});
