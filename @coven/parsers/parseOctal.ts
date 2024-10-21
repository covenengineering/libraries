import type { NumberParser } from "./NumberParser.ts";
import { parseInteger } from "./parseInteger.ts";

/**
 * String to octal parser.
 *
 * Parses a `string` to a octal `number`, returning `undefined` instead of `NaN`
 * if it fails.
 *
 * @example
 * ```typescript
 * parseOctal("101"); // 0o101 -> 65
 * parseOctal("101.5"); // 0o101 -> 65
 * parseOctal("invalid"); // undefined
 * ```
 * @see {@linkcode parseInteger}
 * @param string String to be parsed.
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseOctal: NumberParser = parseInteger(8);
