/**
 * Function that checks if a given `object` is of given object type (checks if
 * the `prototype` matches `Expected`).
 *
 * @template Expected Expected object type.
 */
export type IsPrototypeOfFunction<Expected extends object> = (
	object: unknown,
) => object is Expected;
