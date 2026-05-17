import { memoFunction } from "@coven/memo";
import type { Filter, Unary } from "@coven/types";
import { always } from "@coven/utils";
import type { Field } from "./Field.ts";
import { compareRangeOrValue } from "./compareRangeOrValue.ts";
import { isAllToken } from "./isAllToken.ts";
import { isListField } from "./isListField.ts";

const ALL_TOKEN_INCLUDES = true;
const alwaysTrue = always(ALL_TOKEN_INCLUDES);

/**
 * Checks if given value is included in given field.
 *
 * @example Compare cron fields
 * ```typescript
 * compareField(13)(13); // true
 * compareField(99)(13); // false
 * compareField({from: 0, to: 99 })(13); // true
 * compareField({from: 0, to: 10 })(13); // false
 * compareField([10, 13])(13); // true
 * compareField([10, 11, 12])(13); // false
 * compareField([10, { from: 11, to: 99 }])(13); // true
 * compareField([5, { from: 10, to: 12 }])(13); // false
 * ```
 * @param value Value to compare.
 * @param field Field to compare.
 * @returns `true` if value is included in the given `field`, `false` if it isn't.
 */
export const compareField: Unary<
	[field: Field<number>],
	Filter<[value: number]>
> = memoFunction((field) =>
	isAllToken(field) ? alwaysTrue : (
		memoFunction(
			isListField(field) ?
				(value) => field.some(compareRangeOrValue(value))
			:	(value) => compareRangeOrValue(value)(field),
		)
	),
);
