/**
 * Read-only `Iterable` with default type of items set to `unknown`.
 *
 * @example
 * ```typescript
 * const test1 = [13, 42, 665] as const satisfies ReadonlyIterable<number>; // ok
 * const test2 = ["🧙‍♀️", "🔮", "💀"] as const satisfies ReadonlyIterable<number>; // error
 * ```
 * @template Item Type of the items in the `Iterable`.
 */
export type ReadonlyIterable<Item = unknown> = Readonly<Iterable<Item>>;
