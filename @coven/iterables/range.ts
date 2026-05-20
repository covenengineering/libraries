import type { Numeric, Unary } from "@coven/types";
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
	<Step extends Numeric>(
		step: Step,
	): Unary<
		[from: Step extends bigint ? bigint : number],
		Unary<
			[to: Step extends bigint ? bigint : number],
			IterableIterator<Step extends bigint ? bigint : number>
		>
	> =>
	(from) =>
	(to) =>
		iteratorFunctionToIterableIterator(function* (): Generator<
			Step extends bigint ? bigint : number
		> {
			if (from === to) {
				yield from;
			} else {
				// deno-lint-ignore coven/no-for
				for (
					// deno-lint-ignore prefer-const
					let current = from;
					from < to ? current <= to : current >= to;
					(current as number) += (from < to ? step : -step) as number
				) {
					yield current;
				}
			}
		});
