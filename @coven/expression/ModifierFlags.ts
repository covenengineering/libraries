/**
 * Type union to enforce the `i`, `m` and `s` flas supported by `modifier`.
 *
 * @example
 * ```typescript
 * const flags1: ModifierFlags = "i";
 * const flags2: ModifierFlags = "im";
 * const flags3: ModifierFlags = "ims";
 * ```
 * @see [Modifier](https://coven.to/mdn/Regular_expressions/Modifier)
 */
export type ModifierFlags = "i" | "im" | "ims" | "is" | "m" | "ms" | "s";
