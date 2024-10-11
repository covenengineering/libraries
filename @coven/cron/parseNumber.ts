import { parseDecimal } from "@coven/parsers";
import type { Maybe } from "@coven/types";
import { parseNumberTest } from "./parseNumberTest.ts";

/**
 * Parses a cron list into an array.
 *
 * @example
 * ```typescript
 * parseNumber("5"); // 5
 * parseNumber("13"); // 13
 * parseNumber("59"); // 59
 * parseNumber("60"); // undefined (60 isn't valid for any cron field)
 * ```
 *
 * @param value String that might be a list.
 * @returns Parsed list of `undefined` if it isn't a list string.
 */
export const parseNumber = (value: string): Maybe<number> =>
	(parseNumberTest(value) ? parseDecimal(value) : undefined) as Maybe<number>;
