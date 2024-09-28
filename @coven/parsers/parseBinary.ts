import type { NumberParser } from "./NumberParser.ts";
import { parseInteger } from "./parseInteger.ts";

/**
 * Parses a `string` to a binary `number`, returning `undefined` instead of
 * `NaN` if it fails.
 *
 * @example
 * ```typescript
 * parseBinary("101"); // 0b101 -> 5
 * parseBinary("101.5"); // 0b101 -> 5
 * parseBinary("invalid"); // undefined
 * ```
 * @see {@link parseInteger}
 * @param string String to be parsed.
 * @returns Parsed `number` or `undefined` if it fails.
 */
export const parseBinary: NumberParser = parseInteger(2);
