import { memo } from "@coven/memo";
import type { Radix } from "@coven/types";
import type { NumberParser } from "./NumberParser.ts";
import { undefineNaN } from "./undefineNaN.ts";

/**
 * String to integer parser.
 *
 * Parses a `string` to a `number` with the given `radix`, returning `undefined`
 * instead of `NaN` if it fails.
 *
 * @example
 * ```typescript
 * const parseDecimal = parseInteger(10);
 *
 * parseDecimal("101"); // 101
 * parseDecimal("101.5"); // 101
 * parseDecimal("invalid"); // undefined
 * ```
 * @see {@linkcode undefineNaN}
 * @param radix Radix to use for parsing (`16` for hexadecimal, `10` for decimal, and so on).
 * @returns Curried function with `radix` in context.
 */
export const parseInteger: (radix: Radix) => NumberParser = memo(radix =>
	/**
	 * Curried function with `radix` set.
	 *
	 * @see {@linkcode undefineNaN}
	 * @see {@linkcode parseInteger}
	 * @param string String to parse.
	 * @returns Parsed `number` or `undefined` if it fails.
	 */
	memo(string => undefineNaN(parseInt(string, radix as number))),
);
