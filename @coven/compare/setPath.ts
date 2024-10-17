import type { ReadonlyRecord } from "@coven/types";
import { set } from "@coven/utils";

/**
 * Set `path` property of given `object` to given `value`.
 */
export const setPath: <const Value>(
	value: Value,
) => <const Source extends object>(
	object: Source,
) => Omit<Source, "path"> & ReadonlyRecord<"path", Value> = set("path");
