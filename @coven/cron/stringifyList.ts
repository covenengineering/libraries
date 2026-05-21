import { join, map } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import type { Maybe, Stringable, Unary } from "@coven/types";
import type { Field } from "./Field.ts";
import type { ListString } from "./ListString.ts";
import type { ValueOrRangeField } from "./ValueOrRangeField.ts";
import { isListField } from "./isListField.ts";
import { stringifyRange } from "./stringifyRange.ts";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

const stringifyRangeMap = map(
	(item: ValueOrRangeField<number>) =>
		stringifyRange(item) ?? `${item as number}`,
);

const joinList = join(LIST_EXPRESSION_SEPARATOR_TOKEN) as <
	Item extends Stringable,
>(
	iterable: Iterable<Item>,
) => ListString;

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
	isListField(field) ? joinList(stringifyRangeMap(field)) : undefined,
);
