import { append, flat, join, zip } from "@coven/iterables";
import { memoFunction } from "@coven/memo";
import type {
	Fallback,
	ReadonlyTemplateStringsArray,
	Stringable,
} from "@coven/types";

const appendEmpty = append([""]);
const joinEmpty = join("");

/**
 * Takes a string or a template string and returns a plain string.
 *
 * @example
 * ```typescript
 * normalizeString(`Hello ${13}!`); // "Hello 13!"
 * normalizeString`Hello ${13}!`; // "Hello 13!"
 * ```
 * @see {@linkcode https://coven.to/mdn/Template_literals Tagged templates}
 * @param input String or template string.
 * @param expressions Possible values passed to the template string.
 * @returns Plain string.
 */
export const normalizeString: <
	Input extends ReadonlyTemplateStringsArray | string,
>(
	input: Input,
	...expressions: ReadonlyArray<Stringable>
) => Fallback<ReadonlyTemplateStringsArray, Input, string> = memoFunction(
	<Input extends ReadonlyTemplateStringsArray | string>(
		input: Input,
		...expressions: ReadonlyArray<Stringable>
	): Fallback<ReadonlyTemplateStringsArray, Input, string> =>
		(typeof input === "string" ? input : (
			joinEmpty(flat(zip(input)(appendEmpty(expressions))))
		)) as Fallback<ReadonlyTemplateStringsArray, Input, string>,
);
