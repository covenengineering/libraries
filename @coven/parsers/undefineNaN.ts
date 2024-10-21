import type { Maybe } from "@coven/types";

/**
 * Turns `NaN` into `undefined`.
 *
 * Takes a `number` that could be `NaN` and makes it `undefined` if it is `NaN`.
 *
 * @example
 * ```typescript
 * undefineNaN(10); // 10
 * undefineNaN(13.10); // 13.1
 * undefineNaN(NaN); // undefined
 * ```
 * @template Number Generic of the number to handle.
 * @param number Number to handle.
 * @returns Number if it's not `NaN`, otherwise `undefined`.
 */
export const undefineNaN = <Number extends number>(
	number: Number,
): Maybe<Number> => (Number.isNaN(number) ? undefined : number);
