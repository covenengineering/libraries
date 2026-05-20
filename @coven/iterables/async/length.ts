import type { AwaitableIterable } from "@coven/types";
import { always } from "@coven/utils";
import { reduce } from "./reduce.ts";

/**
 * Get the length of an iterable or asynchronous iterable (using `bigint` for
 * really big iterables).
 *
 * @example
 * ```typescript
 * length([1, 2, 3]); // 3n
 * ```
 * @param iterable Iterable or asynchronous iterable to get the length from.
 * @returns Promise with the length of the iterable.
 */
export const length: <Iterable extends AwaitableIterable>(
	iterable: Iterable,
) => Promise<bigint> = reduce<unknown, bigint>(always((total) => total + 1n))(
	0n,
);
