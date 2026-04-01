import type { MapKey, MapValue } from "@coven/types";
import type { RecordCache } from "./RecordCache.ts";
import type { TupleCache } from "./TupleCache.ts";

/**
 * Union of {@linkcode TupleCache} and {@linkcode RecordCache}.
 */
export type Cache = Map<
	MapKey<TupleCache | RecordCache>,
	MapValue<TupleCache | RecordCache>
>;
