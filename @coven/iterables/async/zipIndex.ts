import type { AwaitableIterable } from "@coven/types";
import { range } from "../range.ts";
import { zip } from "./zip.ts";

/**
 * Yields a tuple for each item in the iterable with the index of said item.
 *
 * @example
 * ```typescript
 * zipIndex(["foo", "bar"]); // [[0, "foo"], [1, "bar"]]
 * ```
 * @param iterable Iterable to add indexes to.
 * @yields Tuples with the index of each item.
 */
export const zipIndex: <ItemSecond>(
	iterableSecond: AwaitableIterable<ItemSecond>,
) => AsyncIterableIterator<Readonly<[number, ItemSecond]>> = zip(
	range(1)(0)(Infinity),
);
