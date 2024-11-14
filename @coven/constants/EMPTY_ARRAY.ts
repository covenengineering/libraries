/**
 * Empty read-only array.
 *
 * > [!CAUTION]
 * > The array is read-only in runtime. Trying to do mutations will throw.
 *
 * @see [Object.freeze](https://mdn.io/Oject.freeze)
 */
export const EMPTY_ARRAY: readonly [] = Object.freeze([]);
