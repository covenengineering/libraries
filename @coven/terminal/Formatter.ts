import type {
	ReadonlyArray,
	ReadonlyTemplateStringsArray,
	Stringable,
} from "@coven/types";

/**
 * Formatter function that takes a string or a tagged template.
 *
 * @example
 * ```typescript
 * const formatter = ((input, ...expressions) =>
 * 	typeof input === "string"
 * 		? input
 * 		: input
 * 				.flatMap((string, index) => [string, expressions[index] ?? ""])
 * 				.join("")) as Formatter;
 *
 * formatter("Coven Engineering"); // "Coven Engineering"
 * formatter`Coven Engineering`; // "Coven Engineering"
 * ```
 * @see [Tagged templates](https://mdn.io/Tagged%20templates)
 * @param input Array of strings for template strings or a single string,
 * followed by an array of expressions (if any).
 * @returns A plain string.
 */
export type Formatter = (
	templateStrings: ReadonlyTemplateStringsArray | string,
	...expressions: ReadonlyArray<Stringable>
) => string;
