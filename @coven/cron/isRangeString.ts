import { memo } from "@coven/memo";
import { parseDecimal } from "@coven/parsers";
import type { RangeString } from "./RangeString.ts";
import { rangeStringTest } from "./rangeStringTest.ts";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Predicate checking if given value is a cron string range
 * ({@linkcode RangeString}).
 *
 * @see {@linkcode RangeString}
 * @see {@linkcode rangeStringTest}
 */
export const isRangeString: (value: string) => value is RangeString = memo(
	(value: string): value is RangeString =>
		rangeStringTest(value)
		&& (([from, to]) => from <= to)(
			value.split(RANGE_EXPRESSION_SEPARATOR_TOKEN).map(parseDecimal) as [
				from: number,
				to: number,
			],
		),
);
