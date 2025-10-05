/**
 * Read-only version of `TemplateStringsArray`.
 *
 * @example
 * ```typescript
 * const readonlyTemplateStringsArray = Object.assign([], {
 * 	raw: [],
 * }) satisfies ReadonlyTemplateStringsArray;
 * ```
 * @see {@linkcode https://coven.to/mdn/Template_literals Template Literals}
 */
export type ReadonlyTemplateStringsArray = Readonly<TemplateStringsArray>;
