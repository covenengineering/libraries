import { group, join, optional } from "@coven/expression";
import { memo } from "@coven/memo";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Regular expression to match values or ranges.
 *
 * @example Generate a value or range regular expression
 * ```typescript
 * valueOrRangeRegExp(13); // "13(?:-13)?"
 * ```
 * @param value Value to match by itself or as a range.
 * @returns RegExp to match value or range.
 */
export const valueOrRangeRegExp: <Value extends number | string>(
	value: Value,
) => `${Value}(?:-${Value})?` = memo(
	<Value extends number | string>(value: Value) =>
		join(value, optional(group(RANGE_EXPRESSION_SEPARATOR_TOKEN, value))),
);
