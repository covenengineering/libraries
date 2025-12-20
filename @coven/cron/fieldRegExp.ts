import { captureNamed, disjunction, escape } from "@coven/expression";
import { memo } from "@coven/memo";
import { ALL_TOKEN } from "./tokens.ts";
import { valueRangeOrListRegExp } from "./valueRangeOrListRegExp.ts";

/**
 * Regular expression to match a cron expression field.
 *
 * @example Creating a field regular expression
 * ```typescript
 * fieldRegExp("example", "13"); // "(?<example>\\*|(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?)))"
 * ```
 * @param name Named group name.
 * @param value Possible values the expression can have.
 * @returns Named group capturing the given value by itself, in a list or range.
 */
export const fieldRegExp: <Name extends string, Value extends string>(
	name: Name,
	value: Value,
) => `(?<${Name}>\\*|(?:${Value}(?:-${Value})?|(?:(?:${Value}(?:-${Value})?,)+${Value}(?:-${Value})?)))` =
	memo(
		<Name extends string, Value extends string>(name: Name, value: Value) =>
			captureNamed(name)(
				disjunction(escape(ALL_TOKEN), valueRangeOrListRegExp(value)),
			),
	);
