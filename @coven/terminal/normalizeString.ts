import { memo } from "@coven/memo";
import type {
	Fallback,
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
 * @see [Tagged templates](https://coven.to/mdn/Template_literals)
 * @param input String or template string.
 * @param expressions Possible values passed to the template string.
 * @returns Plain string.
 */
export const normalizeString: <
	Input extends ReadonlyTemplateStringsArray | string,
>(
	input: Input,
	...expressions: ReadonlyArray<Stringable>
) => Fallback<ReadonlyTemplateStringsArray, Input, string> = memo(
	<Input extends ReadonlyTemplateStringsArray | string>(
		input: Input,
		...expressions: ReadonlyArray<Stringable>
	): Fallback<ReadonlyTemplateStringsArray, Input, string> =>
		(typeof input === "string" ? input : (
			input.reduce(
				(output, string, index) =>
					`${output}${string}${expressions[index] ?? ""}`,
				"",
			)
		)) as Fallback<ReadonlyTemplateStringsArray, Input, string>,
);
