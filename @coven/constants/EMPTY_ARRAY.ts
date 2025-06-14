/**
 * Empty read-only array.
 *
 * > [!CAUTION]
 * > The array is read-only in runtime. Trying to do mutations will throw.
 *
 * @see [Object.freeze](https://coven.to/mdn/Object/freeze)
 */
export const EMPTY_ARRAY: Readonly<[]> = Object.freeze([]);
