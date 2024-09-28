import type { EMPTY_STRING } from "@coven/constants";

/**
 * Empty string. This type is a string with no characters on it (length `0`).
 *
 * @example
 * ```typescript
 * const emptyString = "" as const satisfies EmptyString;
 * ```
 */
export type EmptyString = typeof EMPTY_STRING;
