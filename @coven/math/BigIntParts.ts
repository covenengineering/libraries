import type { ReadonlyRecord } from "@coven/types";
import type { BigIntPartsGroups } from "./BigIntPartsGroups.ts";

/**
 * Type of the groups object for string bigint parts.
 */
export type BigIntParts = Partial<
	ReadonlyRecord<BigIntPartsGroups[number], string>
>;
