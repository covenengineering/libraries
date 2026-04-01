import type { EntryOf } from "@coven/types";
import { stringify } from "@coven/utils";
import type { MemoizableRecord } from "./MemoizableRecord.ts";

/**
 * Internal sorting function for `sortEntries`.
 */
export const entriesSorter = <Record extends MemoizableRecord>(
	[left]: EntryOf<Record>,
	[right]: EntryOf<Record>,
): number => stringify(left).localeCompare(stringify(right));
