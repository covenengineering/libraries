/**
 * Empty read-only `null` prototype object.
 *
 * > [!CAUTION]
 * > The object is read-only in runtime. Trying to do mutations will throw.
 *
 * @see [Object.create](https://mdn.io/Object.create)
 * @see [Object.freeze](https://mdn.io/Object.freeze)
 */
export const EMPTY_OBJECT: Readonly<Record<PropertyKey, never>> = Object.freeze(
	Object.create(null),
);
