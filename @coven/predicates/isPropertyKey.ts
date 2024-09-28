import { isNumber } from "./isNumber.ts";
import { isString } from "./isString.ts";
import { isSymbol } from "./isSymbol.ts";

/**
 * Checks if the given value is a valid PropertyKey of an object (`string`, `symbol`, or `number`).
 *
 * @example
 * ```typescript
 * isPropertyKey("Lou"); // true
 * isPropertyKey(1); // true
 * isPropertyKey(Symbol("Lou")); // true
 * isPropertyKey({}); // false
 * ```
 * @param input Value to check.
 * @returns `true` if the given value is a valid PropertyKey of an object, `false` otherwise.
 */
export const isPropertyKey = (input: unknown): input is PropertyKey =>
	isNumber(input) || isString(input) || isSymbol(input);
