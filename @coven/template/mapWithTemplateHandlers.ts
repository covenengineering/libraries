import { map } from "@coven/iterables";
import { isFunction, isSigil, typeOf } from "@coven/predicates";
import type { Entry, TypeOfDictionary, TypeOfValue } from "@coven/types";
import { stringify } from "@coven/utils";
import type { TemplateHandlers } from "./TemplateHandlers.ts";

/**
 * Creates a mapping function based on the given `handlers` running each handler
 * on the expressions of the entries to be mapped.
 *
 * @example
 * ```typescript
 * const map = mapWithTemplateHandlers({ bigint: (value) => `${value}n` });
 *
 * map([["Hello ", 13n]]); // ["Hello 13n"]
 * ```
 * @template Handlers Handler mapping object (`type => handler`).
 * @param handlers Type handlers object.
 * @returns Mapping function expecting Iterable of tuples string/expression.
 */
export const mapWithTemplateHandlers = <
	const Handlers extends TemplateHandlers,
>(
	handlers: Handlers,
): ((
	iterable: Iterable<Entry<string, TypeOfDictionary[TypeOfValue]>>,
) => IterableIterator<string>) =>
	map(([templateString, expression]) => {
		const handlerOrFallback =
			isSigil(expression) ? "" : (
				(handlers[typeOf(expression)] ?? stringify)
			);

		return `${templateString}${isFunction(handlerOrFallback) ? handlerOrFallback(expression as never) : handlerOrFallback}`;
	});
