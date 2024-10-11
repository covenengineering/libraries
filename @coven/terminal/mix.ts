import type { ReadonlyArray } from "@coven/types";
import type { Formatter } from "./Formatter.ts";

/**
 * Composes formatters. Given an argument array of formatters, it will return a
 * new formatter that will apply all of them to the input string.
 *
 * @example
 * ```typescript
 * const redWhiteBack = mix(red, whiteBack);
 *
 * redWhiteBack("Coven Engineering");
 * // It can also be used as a tag function for tagged templates:
 * redWhiteBack`Coven Engineering`;
 * ```
 * @see {@link Formatter}
 * @param formatters Array of formatters to be composed.
 * @returns Formatter composed of the given formatters.
 */
export const mix = (...formatters: ReadonlyArray<Formatter>): Formatter =>
/**
 * Function with formatters set in context.
 *
 * @example
 * ```typescript
 * redWhiteBack("Coven Engineering");
 * // It can also be used as a tag function for tagged templates:
 * redWhiteBack`Coven Engineering`;
 * ```
 * @see {@link mix}
 *
 * @param input String or template string.
 * @param expressions Possible values passed to the template string.
 * @returns Formatted string.
 */
(input, ...expressions) =>
	formatters.reduce(
		(output, formatter) => formatter(output, ...expressions),
		input,
	) as string;
