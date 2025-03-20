import type { Stringable } from "@coven/types";
import type { FormattedString } from "./FormattedString.ts";

/**
 * Curried formatting function.
 *
 * This is `FormatFunction`'s output, which is a function itself that returns a
 * {@linkcode FormattedString}.
 *
 * @template Open Open code.
 * @template Close Close code.
 */
export type CurriedFormat<Open extends number, Close extends number> = {
	/**
	 * Function that takes a `string` and returns a {@linkcode FormattedString}.
	 *
	 * @param string String to be wrapped with `Open` and `Close`.
	 */
	<const String extends string>(
		string: String,
	): FormattedString<Open, Close, String>;
	/**
	 * Tagger function that takes a string literal and returns a
	 * {@linkcode FormattedString}. The type of the string part sadly can't be
	 * inferred.
	 *
	 * @param templateStringArray Array provided by string literal.
	 * @param expressions Expressions passed to the string literal (has to be
	 * stringable).
	 */
	(
		templateStringArray: TemplateStringsArray,
		...expressions: ReadonlyArray<Stringable>
	): FormattedString<Open, Close>;
};
