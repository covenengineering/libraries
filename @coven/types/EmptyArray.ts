import type { EMPTY_ARRAY } from "@coven/constants";

/**
 * Readonly empty array. Trying to access items on it will give a compile-time
 * error.
 *
 * @example
 * ```typescript
 * const emptyArray = [] as const satisfies EmptyArray;
 * ```
 */
export type EmptyArray = typeof EMPTY_ARRAY;
