/**
 * `typeof` dictionary, including the proposed but never added type `"null"`
 * for `null`.
 *
 * @example
 * ```typescript
 * type TypeOfString = TypeOfDictionary["string"]; // `string`
 * type TypeOfBoolean = TypeOfDictionary["boolean"]; // `boolean`
 * type TypeOfFunction = TypeOfDictionary["function"]; // `Function`
 * type TypeOfNull = TypeOfDictionary["null"]; // `null`
 * ```
 * @see [typeof null bug](https://lou.cx/null-bug)
 * @see [typeof typeof rejected proposal](https://lou.cx/null-typeof)
 */
export type TypeOfDictionary = {
	/**
	 * {@linkcode TypeOfDictionary} key for `BigInt`.
	 */
	readonly bigint: bigint;

	/**
	 * {@linkcode TypeOfDictionary} key for `Boolean`.
	 */
	readonly boolean: boolean;

	/**
	 * {@linkcode TypeOfDictionary} key for `Function`.
	 */
	// deno-lint-ignore ban-types
	readonly function: Function;

	/**
	 * {@linkcode TypeOfDictionary} key for `null`.
	 */
	readonly null: null;

	/**
	 * {@linkcode TypeOfDictionary} key for `Number`.
	 */
	readonly number: number;

	/**
	 * {@linkcode TypeOfDictionary} key for `Object`.
	 */
	readonly object: object;

	/**
	 * {@linkcode TypeOfDictionary} key for `String`.
	 */
	readonly string: string;

	/**
	 * {@linkcode TypeOfDictionary} key for `Symbol`.
	 */
	readonly symbol: symbol;

	/**
	 * {@linkcode TypeOfDictionary} key for `undefined`.
	 */
	readonly undefined: undefined;
};
