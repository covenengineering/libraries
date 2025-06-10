import { memo } from "@coven/memo";
import type { Maybe } from "@coven/types";
import type { Field } from "./Field.ts";
import type { RangeString } from "./RangeString.ts";
import { isRangeField } from "./isRangeField.ts";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Turn a cron range into a string.
 *
 * @example
 * ```typescript
 * stringifyRange({ from: 1, to: 13 }); // "1-13"
 * ```
 * @see {@linkcode isRangeField}
 *
 * @param field Cron field to turn into a string.
 * @returns String ranged of `undefined` if it isn't a range object.
 */
export const stringifyRange: <Predicated extends number>(
	field: Readonly<Field<Predicated>>,
) => Maybe<RangeString> = memo(
	<Predicated extends number>(field: Readonly<Field<Predicated>>) =>
		(isRangeField(field) ?
			`${field.from}${RANGE_EXPRESSION_SEPARATOR_TOKEN}${field.to}`
		:	undefined) as Maybe<RangeString>,
);
