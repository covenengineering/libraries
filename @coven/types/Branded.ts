/**
 * Brand symbol.
 */
export declare const BRAND: unique symbol;

/**
 * Util type to achieve branded types. Branded types are useful to make sure a
 * given type comes from a controlled environment, for example the output of
 * a function.
 *
 * @example
 * ```typescript
 * type Coven<Value> = Branded<"Coven", Value>;
 *
 * const createCovenValue = <Value>(value: Value) => value as Coven<Value>;
 * const readCovenValue = <Value>(covenValue: Coven<Value>) => covenValue;
 *
 * // This is not branded, so it would throw an error:
 * // readCovenValue("✨");
 * // This works because `createCovenValue` is branding it
 * readCovenValue(createCovenValue("✨"));
 * ```
 * @template Brand Name of brand.
 * @template Value Value to brand with {@linkcode Brand}.
 */
export type Branded<Brand extends string, Value> = Value
	& Readonly<{ [BRAND]: Brand }>;
