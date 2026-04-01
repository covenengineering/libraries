import { map } from "@coven/iterables";
import { isObject } from "@coven/predicates";
import type { Memoizable } from "./Memoizable.ts";
import { memo } from "./memo.ts";

/**
 * Used to recursively map values with the {@linkcode memo} util.
 */
export const mapMemo: (
	iterable: Iterable<Memoizable>,
) => IterableIterator<Memoizable> = map((item) =>
	isObject(item) ? memo(item) : item,
);
