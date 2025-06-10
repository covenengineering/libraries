import type { ReadonlyTemplateStringsArray } from "./ReadonlyTemplateStringsArray.ts";

/**
 * Tag function for tagged templates.
 *
 * @example
 * ```typescript
 * const hexParser = (strings =>
 * 	parseInt(strings.join(""), 16)) satisfies Tagger<number>;
 * hexParser`f`; // 15
 * ```
 * @see [Template Literals](https://coven.to/mdn/Template_literals)
 * @template Output Type of the output value.
 * @template Expressions Type of the expressions.
 */
export type Tagger<
	Output = string,
	Expressions extends ReadonlyArray<unknown> = ReadonlyArray<unknown>,
> = (
	templateStrings: ReadonlyTemplateStringsArray,
	...expressions: Expressions
) => Output;
