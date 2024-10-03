/**
 * Empty read-only array. The array is read-only in runtime by `Object.freeze`,
 * so trying to do mutations will throw.
 *
 * @see [Object.freeze](https://mdn.io/Oject.freeze)
 */
export const EMPTY_ARRAY: readonly [] = Object.freeze([]);
