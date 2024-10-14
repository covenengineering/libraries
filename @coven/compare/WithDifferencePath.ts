/**
 * Object with an optional `path` property.
 *
 * This `path` is an `IterableIterator` of `PropertyKey`s.
 */
export type WithDifferencePath = {
	/**
	 * Property path of created, deleted or updated property (undefined for
	 * root).
	 */
	readonly path?: IterableIterator<PropertyKey>;
};
