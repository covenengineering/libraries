import type { sgr } from "./sgr.ts";

/**
 * String wrapped by two {@linkcode sgr} codes.
 *
 * The `string` can be inferred but the `TemplateStringsArray` isn't, so it
 * fallbacks to a plain `string` in that case.
 *
 * @template Open Open code.
 * @template Close Close code.
 * @template Input Input `string` or `TemplateStringsArray`.
 */
export type FormattedString<
	Open extends number,
	Close extends number,
	Input extends string = string,
> = `${ReturnType<typeof sgr<Open>>}${Input}${ReturnType<typeof sgr<Close>>}`;
