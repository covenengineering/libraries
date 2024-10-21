import type { ReadonlyArray } from "./ReadonlyArray.ts";
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
 * @see {@linkcode ReadonlyArray}
 * @see [Template Literals](https://mdn.io/Template%20literals)
 * @template Output Type of the output value.
 * @template Expressions Type of the expressions.
 */
export type Tagger<
	Output = string,
	Expressions extends ReadonlyArray = ReadonlyArray,
> = (
	templateStrings: ReadonlyTemplateStringsArray,
	...expressions: Expressions
) => Output;
