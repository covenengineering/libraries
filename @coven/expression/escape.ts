import { memo } from "@coven/memo";
import type { Stringable } from "@coven/types";

/**
 * Escape given string with a `\`.
 *
 * @example Escape given value
 * ```typescript
 * escape("n"); // "\n"
 * ```
 * @param escaped Value to escape.
 * @returns Escaped value.
 */
export const escape: <const Escaped extends Stringable>(
	escaped: Escaped,
) => `\\${Escaped}` = memo(escaped => `\\${escaped}`);
