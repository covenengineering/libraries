import type {
	ReadonlyTemplateStringsArray,
	TypeOfDictionary,
} from "@coven/types";
import { joinPlain } from "./joinPlain.ts";
import { mapWithTemplateHandlers } from "./mapWithTemplateHandlers.ts";
import type { TemplateHandlers } from "./TemplateHandlers.ts";
import { zipTemplateString } from "./zipTemplateString.ts";

/**
 * Given a set of handlers for types, generates a tagger function for string
 * templates.
 *
 * @example
 * ```typescript
 * const example = template({
 * 	boolean: (value) => value ? "is the truth" : "is a lie",
 * 	null: "💩"
 * });
 *
 * example`Hello! null is ${null} and that ${true}`; // "Hello! null is 💩 and that is the truth"
 * ```
 * @template Handlers Type to handler function dictionary.
 * @returns Curried tagging function with handlers in context.
 */
export const template = <const Handlers extends TemplateHandlers>(
	handlers: Handlers,
): ((
	templateStrings: ReadonlyTemplateStringsArray,
	...expressions: ReadonlyArray<TypeOfDictionary[keyof TypeOfDictionary]>
) => string) => {
	const mapTemplateStrings = mapWithTemplateHandlers(handlers);

	return (...parameters) => {
		return joinPlain(mapTemplateStrings(zipTemplateString(...parameters)));
	};
};
