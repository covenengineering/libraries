import type { Last } from "./Last.ts";
import type { MapEntry } from "./MapEntry.ts";

/**
 * Given a `Map` get it's value type.
 *
 * @example
 * ```typescript
 * const example = new Map<string, number>;
 *
 * type Example = MapValue<typeof example>; // number
 * ```
 * @template Map Map object to get the value type from.
 */
export type MapValue<Map extends ReadonlyMap<unknown, unknown>> = Last<
	MapEntry<Map>
>;
