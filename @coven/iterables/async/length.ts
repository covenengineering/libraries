import type { AwaitableIterable } from "@coven/types";
import { always } from "@coven/utils";
import { reduce } from "./reduce.ts";

/**
 * Get the length of an iterable or asynchronous iterable.
 *
 * @example
 * ```typescript
 * length([1, 2, 3]); // 3
 * ```
 * @param iterable Iterable or asynchronous iterable to get the length from.
 * @returns Promise with the length of the iterable.
 */
export const length: <Iterable extends AwaitableIterable>(
	iterable: Iterable,
) => Promise<number> = reduce<unknown, number>(always(total => total + 1))(0);
