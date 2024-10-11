import { parseDecimal } from "@coven/parsers";
import type { RangeString } from "./RangeString.ts";
import { rangeStringTest } from "./rangeStringTest.ts";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Predicate checking if given value is a cron string range
 * ({@link RangeString}).
 *
 * @see {@link RangeString}
 * @see {@link rangeStringTest}
 */
export const isRangeString = (value: string): value is RangeString =>
	rangeStringTest(value) &&
	(([from, to]) => from <= to)(
		value.split(RANGE_EXPRESSION_SEPARATOR_TOKEN).map(parseDecimal) as [
			from: number,
			to: number,
		],
	);
