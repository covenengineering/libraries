import type { NumberParser } from "./NumberParser.ts";
import { parseInteger } from "./parseInteger.ts";

/**
 * Parses a `string` to a decimal `number`, returning `undefined` instead of
 * `NaN` if it fails.
 *
 * @example
 * ```typescript
 * parseDecimal("101"); // 101
 * parseDecimal("101.5"); // 101
 * parseDecimal("invalid"); // undefined
 * ```
 * @see {@link parseInteger}
 * @param string String to be parsed.
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseDecimal: NumberParser = parseInteger(10);
