import type { Entry } from "./Entry.ts";

/**
 * Given a `Map` get a tuple with the key and value types.
 *
 * @example
 * ```typescript
 * const example = new Map<string, number>;
 *
 * type Example = MapEntry<typeof example>; // readonly [key: string, value: number]
 * ```
 * @template Map Map object to get the entry type from.
 */
export type MapEntry<Map extends ReadonlyMap<unknown, unknown>> =
	Map extends ReadonlyMap<infer Key, infer Value> ? Entry<Key, Value> : never;
