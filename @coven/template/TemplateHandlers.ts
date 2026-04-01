import type { Stringable, TypeOfDictionary } from "@coven/types";

/**
 * Object to map expression types to handlers. The handler can be a function
 * (that receives the expression value as a parameter) or a plain string that
 * will replace the whole expression.
 *
 * @example
 * ```typescript
 * const example = {
 * 	boolean: (value) => value ? "is the truth" : "is a lie",
 * 	null: "💩"
 * } satisfies TemplateHandlers;
 * ```
 */
export type TemplateHandlers = {
	readonly [Key in keyof TypeOfDictionary]?:
		| ((expression: TypeOfDictionary[Key]) => Stringable)
		| Stringable;
};
