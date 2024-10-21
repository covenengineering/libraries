import type { ReadonlyArray, Stringable } from "@coven/types";
import type { FormatFunction } from "./FormatFunction.ts";
import { normalizeString } from "./normalizeString.ts";
import { sgr } from "./sgr.ts";

/**
 * Format wrapper function.
 *
 * Given an `open`, a `close` string and an `input` string, return formatted
 * `input` (surrounded by `open` and `close`).
 *
 * @example
 * ```typescript
 * format(13, 42)("Coven Engineering"); // "[42mCoven Engineering[13m"
 * // It can also be used as a tag function for tagged templates:
 * format(13, 42)`Coven Engineering`; // "[42mCoven Engineering[13m"
 * ```
 * @see {@linkcode sgr}
 * @see {@linkcode normalizeString}
 * @see {@linkcode FormatFunction}
 * @param open Open string.
 * @param close Close string.
 * @returns Curried function with `open` and `close` in context.
 */
export const format = ((open, close) => {
	const sgrOpen = sgr(open);
	const sgrClose = sgr(close);

	/**
	 * {@linkcode format} function with `close` and `open` set.
	 *
	 * @see {@linkcode format}
	 * @param input Input string or `TemplateStringArray` (when using tagged templates).
	 * @param expressions Input expressions (when using tagged templates)
	 * @returns Formatted `input` string.
	 */
	return (
		input: string | TemplateStringsArray,
		...expressions: ReadonlyArray<Stringable>
	) => `${sgrOpen}${
		normalizeString(input, ...expressions).replaceAll(
			sgrClose,
			sgrOpen,
		)
	}${sgrClose}`;
}) as FormatFunction;
