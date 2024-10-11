import type { RangeExpressionSeparatorToken } from "./RangeExpressionSeparatorToken.ts";

/**
 * Type that represents a range of values for a cron string field.
 */
export type RangeString = `${number}${RangeExpressionSeparatorToken}${number}`;
