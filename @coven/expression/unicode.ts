import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";
import { escape } from "./escape.ts";

/**
 * Unicode escaped character in the form \u{FFFF}. Supports a full range of
 * unicode point escapes with any number of hex digits. Requires the unicode
 * flag (`u`).
 */
export const unicode = memo(
	<const HexadecimalValue extends Stringable>(
		hexadecimalValue: HexadecimalValue,
	): `\\u{${HexadecimalValue}}` => escape(`u{${hexadecimalValue}}`),
);
