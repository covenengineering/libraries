import type { HexadecimalDigit } from "./HexadecimalDigit.ts";
import { escape } from "./escape.ts";

/**
 * Hexadecimal escaped character in the form \xFF.
 */
export const hexadecimal = <
	const HexadecimalValue extends `${HexadecimalDigit}${HexadecimalDigit}`,
>(
	hexadecimalValue: HexadecimalValue,
): `\\x${HexadecimalValue}` => escape(`x${hexadecimalValue}`);