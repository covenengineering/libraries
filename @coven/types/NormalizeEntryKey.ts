/**
 * Even when the type of an object property supports `number`, in reality those
 * `number` properties are parsed as `string`. This type normalizes a
 * `PropertyKey` stringifying its `number` properties.
 *
 * @example
 * ```typescript
 * type Example = NormalizeEntryKey<13 | "Coven">; // "13" | "Coven"
 * ```
 * @template EntryKey `PropertyKey` to be stringified.
 */
export type NormalizeEntryKey<EntryKey extends PropertyKey> =
	| Exclude<EntryKey, number>
	| `${Extract<EntryKey, number>}`;
