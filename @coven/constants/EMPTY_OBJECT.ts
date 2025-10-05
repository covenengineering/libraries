/**
 * Empty read-only `null` prototype object.
 *
 * > [!CAUTION]
 * > The object is read-only in runtime. Trying to do mutations will throw.
 *
 * @see {@linkcode https://coven.to/mdn/Object/create Object.create}
 * @see {@linkcode https://coven.to/mdn/Object/freeze Object.freeze}
 */
export const EMPTY_OBJECT: Readonly<Record<PropertyKey, never>> = Object.freeze(
	Object.create(null),
);
