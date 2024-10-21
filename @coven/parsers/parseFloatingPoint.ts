import type { Maybe } from "@coven/types";
import { undefineNaN } from "./undefineNaN.ts";

/**
 * String to float parser.
 *
 * Parses a `string` to a float `number`. Returns `undefined` instead of `NaN`
 * if it fails.
 *
 * @example
 * ```typescript
 * parseFloatingPoint("10"); // 10
 * parseFloatingPoint("13.10"); // 13.1
 * parseFloatingPoint("invalid"); // undefined
 * ```
 * @see {@linkcode undefineNaN}
 * @param string String to parse.
 * @returns Parsed number or `undefined` if invalid.
 */
export const parseFloatingPoint = (string: string): Maybe<number> =>
	undefineNaN(parseFloat(string));
