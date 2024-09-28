/**
 * `typeof` dictionary, including the proposed but never added type `"null"`
 * for `null`.
 *
 * @example
 * ```typescript
 * type TypeOfString = TypeOfMap["string"]; // `string`
 * type TypeOfBoolean = TypeOfMap["boolean"]; // `boolean`
 * type TypeOfFunction = TypeOfMap["function"]; // `Function`
 * type TypeOfNull = TypeOfMap["null"]; // `null`
 * ```
 * @see [typeof null bug](https://lou.cx/null-bug)
 * @see [typeof typeof rejected proposal](https://lou.cx/null-typeof)
 */
export type TypeOfDictionary = {
	/**
	 * {@link TypeOfDictionary} key for `BigInt`.
	 */
	readonly bigint: bigint;

	/**
	 * {@link TypeOfDictionary} key for `Boolean`.
	 */
	readonly boolean: boolean;

	/**
	 * {@link TypeOfDictionary} key for `Function`.
	 */
	// deno-lint-ignore ban-types
	readonly function: Function;

	/**
	 * {@link TypeOfDictionary} key for `null`.
	 */
	readonly null: null;

	/**
	 * {@link TypeOfDictionary} key for `Number`.
	 */
	readonly number: number;

	/**
	 * {@link TypeOfDictionary} key for `Object`.
	 */
	readonly object: object;

	/**
	 * {@link TypeOfDictionary} key for `String`.
	 */
	readonly string: string;

	/**
	 * {@link TypeOfDictionary} key for `Symbol`.
	 */
	readonly symbol: symbol;

	/**
	 * {@link TypeOfDictionary} key for `undefined`.
	 */
	readonly undefined: undefined;
};
