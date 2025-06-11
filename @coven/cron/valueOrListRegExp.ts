import { disjunction, exists, group } from "@coven/expression";
import { memo } from "@coven/memo";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Regular expression to match lists.
 *
 * @example Generate a value or list regular expression
 * ```typescript
 * valueOrListRegExp(13); // "(?:13|(?:(?:13,)+13))"
 * ```
 * @param value Value to match by itself or as a list.
 * @returns RegExp to match value or list.
 */
export const valueOrListRegExp: <Value extends number | string>(
	value: Value,
) => `(?:${Value}|(?:(?:${Value},)+${Value}))` = memo(
	<Value extends number | string>(value: Value) =>
		group(
			disjunction(
				value,
				group(
					exists(group(value, LIST_EXPRESSION_SEPARATOR_TOKEN)),
					value,
				),
			),
		),
);
