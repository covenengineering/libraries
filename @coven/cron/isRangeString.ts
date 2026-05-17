import { memoFunction } from "@coven/memo";
import { parseDecimal } from "@coven/parsers";
import type { Predicate } from "@coven/types";
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
export const isRangeString: Predicate<string, RangeString> = memoFunction(
	(value): value is RangeString => {
		if (rangeStringTest(value)) {
			const [from, to] = value
				.split(RANGE_EXPRESSION_SEPARATOR_TOKEN)
				.map(parseDecimal) as [from: number, to: number];

			return from <= to;
		} else {
			return false;
		}
	},
);
