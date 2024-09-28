import type { Stringable } from "@coven/types";
import type { FormattedString } from "./FormattedString.ts";

/**
 * `FormatFunction`'s output, which is a function itself that returns a
 * {@link FormattedString}.
 *
 * @template Open Open code.
 * @template Close Close code.
 */
export type CurriedFormat<Open extends number, Close extends number> = <
	Input extends string | TemplateStringsArray,
>(
	input: Input,
	...expressions: ReadonlyArray<Stringable>
) => FormattedString<Open, Close, Input>;
