/**
 * Tuple of length 1 (AKA Monuple).
 *
 * @example
 * ```typescript
 * const single = [true] as const satisfies Single<boolean>;
 * ```
 * @template Item Type of the single element.
 */
export type Single<Item> = Readonly<[single: Item]>;
