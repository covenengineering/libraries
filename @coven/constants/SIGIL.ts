/**
 * Internal value to be used as bottom value (like `null` and `undefined`) when
 * native bottom values have to be used for something else.
 */
export const SIGIL: unique symbol = Symbol.for("⛧");
