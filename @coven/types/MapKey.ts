import type { Head } from "./Head.ts";
import type { MapEntry } from "./MapEntry.ts";

/**
 * Given a `Map` get it's key type.
 *
 * @example
 * ```typescript
 * const example = new Map<string, number>;
 *
 * type Example = MapKey<typeof example>; // string
 * ```
 * @template Map Map object to get the key type from.
 */
export type MapKey<Map extends ReadonlyMap<unknown, unknown>> = Head<
	MapEntry<Map>
>;
