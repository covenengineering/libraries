import type { SIGIL } from "@coven/constants";
import { zip } from "@coven/iterables";
import type { ReadonlyTemplateStringsArray } from "@coven/types";
import { appendSigil } from "./appendSigil.ts";

/**
 * Zips template strings and expressions from a template string:
 *
 * @example
 * ```typescript
 * zipTemplateString`Hello ${13n}`; // [["Hello ", 13n], ["", ""]]
 * ```
 */
export const zipTemplateString = <const Expression>(
	templateStrings: ReadonlyTemplateStringsArray,
	...expressions: ReadonlyArray<Expression>
): IterableIterator<
	readonly [templateString: string, expressions: typeof SIGIL | Expression]
> => zip(templateStrings)(appendSigil(expressions));
