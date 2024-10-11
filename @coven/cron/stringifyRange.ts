import type { Maybe } from "@coven/types";
import type { Field } from "./Field.ts";
import type { RangeString } from "./RangeString.ts";
import { isRangeField } from "./isRangeField.ts";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.ts";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Turn a cron range into a string.
 *
 * @example
 * ```typescript
 * parseRange({ from: 1, to: 13 }); // "1-13"
 * ```
 * @see {@link isRangeField}
 *
 * @param field Cron field to turn into a string.
 * @returns String ranged of `undefined` if it isn't a range object.
 */
export const stringifyRange = <Predicated extends number>(
	field: Readonly<Field<Predicated>>,
): Maybe<RangeString> =>
	(isRangeField(field)
		? `${field[FROM_NAME]}${RANGE_EXPRESSION_SEPARATOR_TOKEN}${
			field[TO_NAME]
		}`
		: undefined) as Maybe<RangeString>;
