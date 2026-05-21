import { always } from "@coven/utils";
import { reduce } from "./reduce.ts";

/**
 * Get the length of an iterable (using `bigint` for really big iterables).
 *
 * @example
 * ```typescript
 * length([1, 2, 3]); // 3n
 * ```
 * @param iterable Iterable to get the length from.
 * @returns The length of the iterable.
 */
export const length: <Item>(iterable: Iterable<Item>) => bigint = reduce(
	always((total: bigint) => total + 1n),
)(0n);
