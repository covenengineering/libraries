/**
 * Object with an optional `path` property.
 *
 * This `path` is an `IterableIterator` of `PropertyKey`s.
 */
export type WithPropertyPath = {
	/**
	 * Property path of created, deleted or updated property (undefined for
	 * root).
	 */
	readonly path: IterableIterator<PropertyKey>;
};
