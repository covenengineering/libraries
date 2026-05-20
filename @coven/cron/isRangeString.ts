import { iterableToArray, map } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import { parseDecimal } from "@coven/parsers";
import type { Predicate } from "@coven/types";
import type { RangeString } from "./RangeString.ts";
import { rangeStringTest } from "./rangeStringTest.ts";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

const mapParseDecimal = map(parseDecimal);

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
			const [from, to] = iterableToArray(
				mapParseDecimal(value.split(RANGE_EXPRESSION_SEPARATOR_TOKEN)),
			) as [from: number, to: number];

			return from <= to;
		} else {
			return false;
		}
	},
);
