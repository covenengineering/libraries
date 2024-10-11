import type { ListExpressionSeparatorToken } from "./ListExpressionSeparatorToken.ts";
import type { ValueOrRangeString } from "./ValueOrRangeString.ts";

/**
 * Type that represents a list of values for a cron string field.
 *
 * @see {@link ValueOrRangeString}
 */
export type ListString =
	`${string}${ListExpressionSeparatorToken}${ValueOrRangeString}`;
