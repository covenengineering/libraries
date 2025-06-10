/**
 * Read-only version of `TemplateStringsArray`.
 *
 * @example
 * ```typescript
 * const readonlyTemplateStringsArray = Object.assign([], {
 * 	raw: [],
 * }) satisfies ReadonlyTemplateStringsArray;
 * ```
 * @see [Template Literals](https://coven.to/mdn/Template_literals)
 */
export type ReadonlyTemplateStringsArray = Readonly<TemplateStringsArray>;
