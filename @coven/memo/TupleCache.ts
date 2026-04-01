import type { SIGIL } from "@coven/constants";
import type { Memoizable } from "./Memoizable.ts";
import type { MemoizableTuple } from "./MemoizableTuple.ts";

/**
 * Nested `Map`s Cache for {@linkcode MemoizableTuple} values.
 *
 * @see {@linkcode SIGIL}
 * @see {@linkcode Memoizable}
 * @see {@linkcode MemoizableTuple}
 */
export type TupleCache = Map<
	Memoizable | typeof SIGIL,
	TupleCache | MemoizableTuple
>;
