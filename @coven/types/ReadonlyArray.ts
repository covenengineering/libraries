/**
 * An alternative for TypeScript's `ReadonlyArray` type, with its type set to
 * `unknown` by default to avoid the using the awkward `ReadonlyArray<unknown>`
 * every time for generic typed read0only arrays.
 *
 * @example
 * ```typescript
 * const array = [{ "🧙‍♀️": 13 }, { "🧙‍♀️": 42 }] as const satisfies ReadonlyArray<{
 * 	"🧙‍♀️": number;
 * }>;
 * array[0]; // Maybe<{ "🧙‍♀️": number }>
 * ```
 *
 * @template Item Type of the items in the array.
 */
export type ReadonlyArray<Item = unknown> = readonly Item[];
