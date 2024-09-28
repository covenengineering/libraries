import type { ReadonlyRecord } from "@coven/types";

/**
 * Function that checks if a given `Property` exists in a given `object`.
 *
 * @template Property Property type.
 */
export type HasFunction<Property extends PropertyKey> = (
	object: unknown,
) => object is ReadonlyRecord<Property, unknown>;
