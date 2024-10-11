import { captureNamed, escape, or } from "@coven/expression";
import { ALL_TOKEN } from "./tokens.ts";
import { valueRangeOrListRegExp } from "./valueRangeOrListRegExp.ts";

/**
 * Regular expression to match a cron expression field.
 *
 * @example
 * ```typescript
 * fieldRegExp("example", 13); // "(?<example>\\*|(?:13(?:-13)?|(?:(?:13(?:-13)?,)+13(?:-13)?)))"
 * ```
 * @param name Named group name.
 * @param value Possible values the expression can have.
 * @returns Named group capturing the given value by itself, in a list or range.
 */
export const fieldRegExp = <Name extends string, Value extends string>(
	name: Name,
	value: Value,
): `(?<${Name}>\\*|(?:${Value}(?:-${Value})?|(?:(?:${Value}(?:-${Value})?,)+${Value}(?:-${Value})?)))` =>
	captureNamed(name)(or(escape(ALL_TOKEN), valueRangeOrListRegExp(value)));
