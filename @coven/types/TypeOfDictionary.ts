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
 * @see {@linkcode https://lou.cx/null-bug typeof null bug}
 * @see {@linkcode https://lou.cx/null-typeof typeof typeof rejected proposal}
 */
export type TypeOfDictionary = Readonly<{
	/**
	 * {@linkcode TypeOfDictionary} key for `BigInt`.
	 */
	bigint: bigint;

	/**
	 * {@linkcode TypeOfDictionary} key for `Boolean`.
	 */
	boolean: boolean;

	/**
	 * {@linkcode TypeOfDictionary} key for `Function`.
	 */
	// deno-lint-ignore ban-types
	function: Function;

	/**
	 * {@linkcode TypeOfDictionary} key for `null`.
	 */
	null: null;

	/**
	 * {@linkcode TypeOfDictionary} key for `Number`.
	 */
	number: number;

	/**
	 * {@linkcode TypeOfDictionary} key for `Object`.
	 */
	object: object;

	/**
	 * {@linkcode TypeOfDictionary} key for `String`.
	 */
	string: string;

	/**
	 * {@linkcode TypeOfDictionary} key for `Symbol`.
	 */
	symbol: symbol;

	/**
	 * {@linkcode TypeOfDictionary} key for `undefined`.
	 */
	undefined: undefined;
}>;
