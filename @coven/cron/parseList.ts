import { iterableToArray, unique } from "@coven/iterables";
import { memo } from "@coven/memo";
import type { Maybe } from "@coven/types";
import type { ListField } from "./ListField.ts";
import { isListString } from "./isListString.ts";
import { parseListMap } from "./parseListMap.ts";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Parses a cron list into an array.
 *
 * @example Parse cron list
 * ```typescript
 * parseList("10,11,13"); // [10, 11, 13]
 * ```
 * @see {@linkcode isListString}
 *
 * @param value String that might be a list.
 * @returns Parsed list of `undefined` if it isn't a list string.
 */
export const parseList: <Predicated extends number>(
	value: string,
) => Maybe<ListField<Predicated>> = memo(
	<Predicated extends number>(value: string) =>
		(isListString(value)
			? iterableToArray(
				unique(
					parseListMap(value.split(LIST_EXPRESSION_SEPARATOR_TOKEN)),
				),
			)
			: undefined) as Maybe<ListField<Predicated>>,
);
