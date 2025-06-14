import { memo } from "@coven/memo";
import { valueOrListRegExp } from "./valueOrListRegExp.ts";
import { valueOrRangeRegExp } from "./valueOrRangeRegExp.ts";

/**
 * Regular expression to match values, ranges or lists.
 *
 * @example Generate a value, range op list regular expression
 * ```typescript
 * valueRangeOrListRegExp(13); // "(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?))"
 * ```
 * @param value Value to match by itself, as a range or as a list.
 * @returns RegExp to match value, range or list.
 */
export const valueRangeOrListRegExp: <Value extends number | string>(
	value: Value,
) => `(?:${Value}(?:-${Value})?|(?:(?:${Value}(?:-${Value})?,)+${Value}(?:-${Value})?))` =
	memo(<Value extends number | string>(value: Value) =>
		valueOrListRegExp(valueOrRangeRegExp(value)),
	);
