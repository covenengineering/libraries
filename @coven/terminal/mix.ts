import type { ReadonlyArray } from "@coven/types";
import type { Formatter } from "./Formatter.ts";

/**
 * Formatter composer wrapper.
 *
 * Given formatters as arguments, it will return a new formatter that
 * will apply all of them to the input string.
 *
 * @example
 * ```typescript
 * import { red, bgWhite } from "@coven/terminal";
 *
 * const mixed = mix(red, bgWhite);
 *
 * mixed("Coven Engineering");
 * // It can also be used as a tag function for tagged templates:
 * mixed`Coven Engineering`;
 * ```
 * @see {@linkcode Formatter}
 * @param formatters Array of formatters to be composed.
 * @returns Formatter composed of the given formatters.
 */
export const mix =
	(...formatters: ReadonlyArray<Formatter>): Formatter =>
	/**
	 * {@linkcode mix} function with formatters set in context.
	 *
	 * @see {@linkcode mix}
	 * @param input String or template string.
	 * @param expressions Possible values passed to the template string.
	 * @returns Formatted string.
	 */
	(input, ...expressions) =>
		formatters.reduce(
			(output, formatter) => formatter(output, ...expressions),
			input,
		) as string;
