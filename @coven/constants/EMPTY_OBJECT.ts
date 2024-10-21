/**
 * Empty read-only `null` prototype object.
 *
 * > [!IMPORTANT]
 * > The object is read-only in runtime by `Object.freeze`, so trying to do
 * > mutations will throw.
 *
 * @see [Object.create](https://mdn.io/Object.create)
 * @see [Object.freeze](https://mdn.io/Object.freeze)
 */
export const EMPTY_OBJECT: Readonly<Record<PropertyKey, never>> = Object.freeze(
	Object.create(null),
);
