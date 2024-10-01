import { EMPTY_STRING } from "@coven/constants";
import type {
	Fallback,
	ReadonlyArray,
	ReadonlyTemplateStringsArray,
	Stringable,
} from "@coven/types";

/**
 * Takes a string or a template string and returns a plain string.
 *
 * @example
 * ```typescript
 * normalizeString(`Hello ${13}!`); // "Hello 13!"
 * normalizeString`Hello ${13}!`; // "Hello 13!"
 * ```
 * @see [Tagged templates](https://mdn.io/Tagged%20templates)
 * @param input String or template string.
 * @param expressions Possible values passed to the template string.
 * @returns Plain string.
 */
export const normalizeString = <
	Input extends ReadonlyTemplateStringsArray | string,
>(
	input: Input,
	...expressions: ReadonlyArray<Stringable>
): Fallback<ReadonlyTemplateStringsArray, Input, string> =>
	(typeof input === "string" ? input : (
		input.reduce(
			(output, string, index) =>
				`${output}${string}${expressions[index] ?? EMPTY_STRING}`,
			EMPTY_STRING,
		)
	)) as Fallback<ReadonlyTemplateStringsArray, Input, string>;
