import type { Fallback, ReadonlyTemplateStringsArray } from "@coven/types";
import type { sgr } from "./sgr.ts";

/**
 * String wrapped by two {@link sgr} codes and a `string` or a
 * `TemplateStringsArray`. The `string` can be inferred but the
 * `TemplateStringsArray` isn't, so it fallbacks to a plain `string` in that
 * case.
 *
 * @template Open Open code.
 * @template Close Close code.
 * @template Input Input `string` or `TemplateStringsArray`.
 */
export type FormattedString<
	Open extends number,
	Close extends number,
	Input extends string | TemplateStringsArray,
> = `${ReturnType<typeof sgr<Open>>}${Fallback<
	ReadonlyTemplateStringsArray,
	Input,
	string
>}${ReturnType<typeof sgr<Close>>}`;
