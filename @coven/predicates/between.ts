import type { Filter, Numeric, Unary } from "@coven/types";

/**
 * Checks if a `value` is between `start` and `end` (inclusive).
 *
 * @example
 * ```typescript
 * const between0 = between(0);
 * const between0And10 = between0(10);
 *
 * between0And10(5); // true
 * between0And10(-1); // false
 * between0And10(11); // false
 * ```
 * @param start Minimum boundary.
 * @returns Curried function with `start` in context.
 */
export const between =
	<NumericOrString extends Numeric | string>(
		start: NumericOrString,
	): Unary<
		[
			end: NumericOrString extends string ? string
			: NumericOrString extends number ? number
			: bigint,
		],
		Filter<
			[
				value: NumericOrString extends string ? string
				: NumericOrString extends number ? number
				: bigint,
			]
		>
	> =>
	(end) =>
	(value) =>
		((start as number) === (end as number)
			&& (value as number) === (start as number))
		|| ((start as number) < (end as number)
			&& (value as number) >= (start as number)
			&& (value as number) <= (end as number))
		|| ((value as number) <= (start as number)
			&& (value as number) >= (end as number));
