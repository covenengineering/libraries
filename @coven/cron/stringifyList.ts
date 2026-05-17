import { memoFunction } from "@coven/memo";
import type { Maybe, Unary } from "@coven/types";
import type { Field } from "./Field.ts";
import type { ListString } from "./ListString.ts";
import { isListField } from "./isListField.ts";
import { stringifyRange } from "./stringifyRange.ts";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Turns cron list into a string.
 *
 * @example Stringify cron list back to cron expression list
 * ```typescript
 * stringifyList([10, 11, 13]); // "10,11,13"
 * ```
 * @see {@linkcode isListField}
 * @see {@linkcode stringifyRange}
 *
 * @param field List cron object field
 * @returns String list or `undefined` if it isn't a list.
 */
export const stringifyList: Unary<
	[field: Readonly<Field<number>>],
	Maybe<ListString>
> = memoFunction((field) =>
	isListField(field) ?
		(field
			.map((item) => stringifyRange(item) ?? `${item as number}`)
			.join(LIST_EXPRESSION_SEPARATOR_TOKEN) as ListString)
	:	undefined,
);
