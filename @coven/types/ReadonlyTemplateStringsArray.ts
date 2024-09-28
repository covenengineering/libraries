/**
 * Read-only version of `TemplateStringsArray`.
 *
 * @example
 * ```typescript
 * const readonlyTemplateStringsArray = Object.assign([], {
 * 	raw: [],
 * }) satisfies ReadonlyTemplateStringsArray;
 * ```
 * @see [Template Literals](https://mdn.io/Template%20literals)
 */
export type ReadonlyTemplateStringsArray = Readonly<TemplateStringsArray>;
