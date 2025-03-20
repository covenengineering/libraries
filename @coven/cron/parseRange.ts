import { entriesToObject } from "@coven/iterables";
import type { Maybe } from "@coven/types";
import type { RangeField } from "./RangeField.ts";
import { isRangeString } from "./isRangeString.ts";
import { parseNumberMap } from "./parseNumberMap.ts";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.ts";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";
import { zipRangeNames } from "./zipRangeNames.ts";

/**
 * Parses a cron range into an object.
 *
 * @example
 * ```typescript
 * parseRange("1-13"); // { from: 1, to: 13 }
 * parseRange("13-13"); // 13 (normalized)
 * parseRange("13-1"); // undefined
 * ```
 * @see {@linkcode isRangeString}
 * @see {@linkcode zipRangeNames}
 * @see {@linkcode parseNumberMap}
 *
 * @param value String that might be a range.
 * @returns Parsed ranged of `undefined` if it isn't a range string.
 */
export const parseRange = <Predicated extends number>(
	value: string,
): Maybe<Predicated | RangeField<Predicated>> => {
	const maybeRange =
		isRangeString(value) ?
			entriesToObject(
				zipRangeNames(
					parseNumberMap(
						value.split(RANGE_EXPRESSION_SEPARATOR_TOKEN),
					),
				),
			)
		:	undefined;

	return (
		maybeRange?.[FROM_NAME] === maybeRange?.[TO_NAME] ?
			maybeRange?.[FROM_NAME]
		:	maybeRange) as Maybe<Predicated | RangeField<Predicated>>;
};
