import type { SIGIL } from "@coven/constants";
import type { Entry } from "@coven/types";
import type { Memoizable } from "./Memoizable.ts";
import type { MemoizableRecord } from "./MemoizableRecord.ts";

/**
 * Nested `Map`s Cache for {@linkcode MemoizableRecord} values.
 *
 * @see {@linkcode SIGIL}
 * @see {@linkcode MemoizableRecord}
 */
export type RecordCache = Map<
	Entry<string, Memoizable> | typeof SIGIL,
	RecordCache | MemoizableRecord
>;
