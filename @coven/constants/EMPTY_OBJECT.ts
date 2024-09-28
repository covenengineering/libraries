/**
 * Empty read-only plain object.
 */
export const EMPTY_OBJECT: Readonly<Record<PropertyKey, never>> = Object.freeze(
	Object.assign(Object.create(null), {}),
);
