import type { ReadonlyRecord, ValueOf } from "@coven/types";
import type { NumberPartsGroups } from "./NumberPartsGroups.ts";

/**
 * Type of the groups object for string number parts.
 */
export type NumberParts = Partial<
	ReadonlyRecord<ValueOf<NumberPartsGroups>, string>
>;
