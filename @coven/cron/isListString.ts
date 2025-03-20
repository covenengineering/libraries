import { includes } from "@coven/iterables";
import type { ListString } from "./ListString.ts";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.ts";

/**
 * Predicate checking if given value is a {@linkcode ListString}.
 *
 * @see {@linkcode ListString}
 * @see {@linkcode LIST_EXPRESSION_SEPARATOR_TOKEN}
 */
export const isListString = includes(LIST_EXPRESSION_SEPARATOR_TOKEN) as (
	value: Iterable<unknown>,
) => value is ListString;
