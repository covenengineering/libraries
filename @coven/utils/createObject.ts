/**
 * Alias for `Object.create(null)` or `Object.assign(Object.create(null))`.
 *
 * @example
 * ```typescript
 * createObject(); // {}
 * createObject({ witch: "🧙🏻‍♀️" }); // { witch: "🧙🏻‍♀️" }
 * ```
 * @param source Optional base object.
 * @returns Clean object (with `null` prototype).
 */
export const createObject = <
	Object extends object = Readonly<Record<PropertyKey, never>>,
>(
	source?: Object,
): Object => {
	const nullPrototypeObject = Object.create(null);

	return source !== undefined ?
			Object.assign(nullPrototypeObject, source)
		:	nullPrototypeObject;
};
