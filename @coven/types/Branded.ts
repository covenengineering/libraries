/**
 * Brand symbol.
 */
export declare const BRAND: unique symbol;

/**
 * Util type to achieve branded types.
 *
 * @example
 * ```typescript
 * type Coven<Value> = Branded<"Coven", Value>;
 * ```
 * @template Brand Name of brand.
 * @template Value Value to brand with {@linkcode Brand}.
 */
export type Branded<Brand extends string, Value> = Value & {
	readonly [BRAND]: Brand;
};
